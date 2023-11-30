import { effectScope, nextTick, onScopeDispose, ref, watch } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import * as echarts from 'echarts/core'

import type {
  DatasetComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import { useElementSize } from '@vueuse/core'

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
    if (isRendered()) {
      // chart?.clear()
      chart!.setOption({ ...updateOptions, backgroundColor: 'transparent' })
    }
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
