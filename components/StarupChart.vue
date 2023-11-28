<script setup lang='ts'>
import * as echarts from 'echarts'
import { deepClone, strToNumber } from '../utils'

const props = defineProps<{
  data: any[]
}>()
const { data: currentData } = toRefs(props)
const chartOptions = ref<any>({
  title: {
    text: 'Star飙升榜',
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
      name: 'starup',
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' },
        ]),
      },
      label: {
        color: '#fff',
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
  isUpdate ? chart.clear() : (chart = echarts.init(document.getElementById('main-starup') as HTMLDivElement))
  const starup: number[] = []
  const names: string[] = []
  dataCopy.sort((a: Repo, b: Repo) => strToNumber(a.starup) - strToNumber(b.starup))
  dataCopy.forEach((item: Repo) => {
    starup.push(strToNumber(item.starup))
    names.push(`${item.owner}${item.name}`)
  })
  chartOptions.value.yAxis.data = names
  chartOptions.value.series[0].data = starup
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
  <div id="main-starup" class="h-300 w-330" />
</template>

<style scoped lang='scss'>
</style>
