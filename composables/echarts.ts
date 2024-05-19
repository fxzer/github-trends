import { effectScope, nextTick, onScopeDispose, ref, watch } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import type {
  DatasetComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import { useElementSize } from '@vueuse/core'
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])
export type ECOption = echarts.ComposeOption<
  | TitleComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | ToolboxComponentOption
  | DatasetComponentOption
>

/**
 * Echarts hooks函数
 * @param options - 图表配置
 * @param renderFun - 图表渲染函数(例如：图表监听函数)
 * @description 按需引入图表组件，没注册的组件需要先引入
 */
export function useEcharts(
  options: Ref<ECOption> | ComputedRef<ECOption>,
  renderFun?: (chartInstance: echarts.ECharts, option: ECOption) => void,
) {
  const isDark = useDark()
  const domRef = ref<HTMLElement>()

  const initialSize = { width: 0, height: 0 }
  const { width, height } = useElementSize(domRef, initialSize)

  let chart: echarts.ECharts | null = null

  function canRender() {
    return initialSize.width > 0 && initialSize.height > 0
  }

  function isRendered() {
    return Boolean(domRef.value && chart)
  }

  function update(updateOptions: ECOption) {
    if (isRendered())
      chart!.setOption(updateOptions)
  }

  async function render() {
    if (domRef.value) {
      await nextTick()
      const theme = isDark.value ? 'dark' : 'light'
      chart = echarts.init(domRef.value, theme)
      if (renderFun)
        renderFun(chart, options.value)

      update(options.value)
    }
  }

  function resize() {
    chart?.resize()
  }

  function destroy() {
    chart?.dispose()
  }

  function updateTheme() {
    destroy()
    render()
  }

  const scope = effectScope()

  scope.run(() => {
    watch([width, height], ([newWidth, newHeight]) => {
      initialSize.width = newWidth
      initialSize.height = newHeight
      if (newWidth === 0 && newHeight === 0) {
        // 节点被删除 将chart置为空
        chart = null
      }
      // 移动端 隐藏containLabel
      if (newWidth < 640) {
        options.value.grid = {
          ...options.value.grid,
          containLabel: false,
        }
        options.value.title = {
          ...options.value.title,
          left: 0,
        }
      }
      else {
        options.value.grid = {
          ...options.value.grid,
          containLabel: true,
        }
        options.value.title = {
          ...options.value.title,
          left: 'center',
        }
      }
      if (canRender()) {
        if (!isRendered())
          render()

        else
          resize()
      }
    })

    watch(
      options,
      (newValue) => {
        update(newValue)
      },
      { deep: true },
    )

    watch(
      isDark,
      () => {
        updateTheme()
      },
    )
  })

  onScopeDispose(() => {
    destroy()
    scope.stop()
  })

  return {
    domRef,
    chart,
  }
}
export function itemStyle(color: string) {
  return {
    borderRadius: 10,
    color: new echarts.graphic.LinearGradient(
      0,
      0,
      1,
      0,
      [
        { offset: 0, color: `${color},0.5)` },
        { offset: 0.2, color: `${color},0.3)` },
        { offset: 1, color: `${color},0.1)` },
      ],
    ),
  }
}
export function seriesItem({ name = '', color = '' }) {
  return {
    name,
    type: 'bar',
    stack: 'total',
    barWidth: 20,
    itemStyle: itemStyle(color),
    emphasis: {
      focus: 'series',
    },
  }
}
