<script setup lang='ts'>
import * as echarts from 'echarts'
import { deepClone } from '~/utils'

const props = defineProps<{
  data: any[]
}>()
const { data: currentData } = toRefs(props)
const chartOptions = ref<any>({
  title: {
    text: '仓库排行榜',
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
      name: 'watchers',
      type: 'bar',
      stack: 'total',
      itemStyle: {
        color: '#818cf8',
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
  isUpdate ? chart.clear() : (chart = echarts.init(document.getElementById('repos-main') as HTMLDivElement))
  const stars: number[] = []
  const forks: number[] = []
  const watchers: number[] = []
  const names: string[] = []
  dataCopy.forEach((item: Repo) => {
    stars.unshift(item.stars)
    forks.unshift(item.forks)
    watchers.unshift(item.watchers)
    names.unshift(item.full_name)
  })
  chartOptions.value.yAxis.data = names
  chartOptions.value.series[0].data = stars
  chartOptions.value.series[1].data = forks
  chartOptions.value.series[2].data = watchers
  chart.setOption(chartOptions.value, isUpdate ? { replaceMerge: ['xAxis', 'yAxis', 'series'] } : {})
}
onMounted(() => {
  draw(currentData.value)
})
watch(currentData, () => {
  draw(currentData.value, true)
}, { deep: true })
</script>

<template>
  <div id="repos-main" class="h-300 w-330" />
</template>

<style scoped lang='scss'>
</style>
