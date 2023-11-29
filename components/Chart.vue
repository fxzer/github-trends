<script setup lang='ts'>
import * as echarts from 'echarts'

import type { ECharts } from 'echarts'
import { deepClone, strToNumber } from '../utils'

const props = defineProps<{
  data: any[]
}>()
const { data: currentData } = toRefs(props)

declare module 'echarts' {
  interface ECharts {
    yIndex?: number
  }
}
let chart: ECharts
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
        if (index === chart.yIndex)
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
  useChartBehaver(chart, chartOptions)
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
