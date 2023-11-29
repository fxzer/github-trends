<script setup lang='ts'>
import * as echarts from 'echarts'
import { deepClone, strToNumber } from '../utils'

const props = defineProps<{
  data: any[]
}>()
const { data: currentData } = toRefs(props)
let yIndex: any
const chartOptions = ref<any>({
  title: {
    text: 'Star/Fork/Starup总和排行榜',
    left: 'center',
  },
  grid: {
    left: 80,
    right: 0,
    bottom: 20,
    top: 30,
    containLabel: true,
  },
  tooltip: {},
  xAxis: {
    // 分隔线
    splitLine: {
      // 颜色
      lineStyle: {
        color: '#99999970',
      },
    },
    type: 'value',
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: 'category',
    data: [],
    triggerEvent: true,
    axisLabel: {
      formatter(value: string, index: number) {
        if (index === yIndex)
          return `{b|${value}}`
        else
          return value
      },
      rich: {
        b: {
          color: '#3D82F6',
          align: 'center',
        },
      },
    },
  },
  series: [
    {
      name: 'stars',
      type: 'bar',
      stack: 'total',
      // 颜色
      itemStyle: {
        color: '#9FE080',
      },
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
    },
    {
      name: 'forks',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      itemStyle: {
        color: '#F9C858',
      },
      emphasis: {
        focus: 'series',
      },
    },
    {
      name: 'starup',
      type: 'bar',
      stack: 'total',
      itemStyle: {
        color: '#EE6666',
      },
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
    },
  ],
})
let chart: any
function draw(data: Repo[], isUpdate = false) {
  const dataCopy = deepClone(data)
  isUpdate ? chart.clear() : (chart = echarts.init(document.getElementById('main') as HTMLDivElement))
  const stars: number[] = []
  const forks: number[] = []
  const starup: number[] = []
  const names: string[] = []
  dataCopy.sort((a: Repo, b: Repo) => {
    const acount = strToNumber(a.starup) + strToNumber(a.stars) + strToNumber(a.forks)
    const bcount = strToNumber(b.starup) + strToNumber(b.stars) + strToNumber(b.forks)
    return acount - bcount
  })
  dataCopy.forEach((item: Repo) => {
    stars.push(strToNumber(item.stars))
    forks.push(strToNumber(item.forks))
    starup.push(strToNumber(item.starup))
    names.push(`${item.owner}/${item.name}`)
  })
  chartOptions.value.yAxis.data = names
  chartOptions.value.series[0].data = stars
  chartOptions.value.series[1].data = forks
  chartOptions.value.series[2].data = starup
  chart.setOption(chartOptions.value, isUpdate ? { replaceMerge: ['xAxis', 'yAxis', 'series'] } : {})
}

onMounted(() => {
  draw(currentData.value)
  /** y 坐标文本点击事件 */
  chart.on('click', (params: any) => {
    const { value = '', componentType } = params
    if (componentType === 'yAxis')
      window.open(`https://github.com/${value}`, '_blank')
  })
  /** y 坐标文本悬浮高亮 */
  chart.on('mouseover', (params: any) => {
    const { componentType, tickIndex } = params
    if (componentType === 'yAxis') {
      yIndex = tickIndex
      draw(currentData.value)
    }
  })
  chart.on('mouseout', (params: any) => {
    const { componentType } = params
    if (componentType === 'yAxis') {
      yIndex = undefined
      draw(currentData.value)
    }
  })
})
watch(currentData, () => {
  draw(currentData.value, true)
}, { deep: true })
</script>

<template>
  <div id="main" class="h-300 w-330" />
</template>

<style scoped lang='scss'>
</style>
