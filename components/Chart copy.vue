<script setup lang='ts'>
import * as echarts from 'echarts'
import { deepClone, strToNumber } from '../utils'

const props = defineProps<{
  data: any[]
}>()
const { data } = toRefs(props)
const chartOptions = ref<any>({
  title: {
    text: '排行榜',
  },
  tooltip: {},
  xAxis: {
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
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      // data: stars,
    },
    {
      name: 'forks',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      // data: forks,
    },
    {
      name: 'starup',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      // data: starup,
    },
  ],
})
const dataCopy = deepClone(props.data)
let chart: any
function draw(data: Repo[], isUpdate = false) {
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
    names.push(`${item.owner}${item.name}`)
  })
  chartOptions.value.yAxis.data = names
  chartOptions.value.series[0].data = stars
  chartOptions.value.series[1].data = forks
  chartOptions.value.series[2].data = starup
  chart.setOption(chartOptions.value, isUpdate ? { replaceMerge: ['xAxis', 'yAxis', 'series'] } : {})
}
onMounted(() => {
  draw(data.value)
  // chart.setOption(chartOptions.value)
})
watch(data, () => {
  draw(data.value, true)
  // chart.setOption(chartOptions.value, { replaceMerge: ['xAxis', 'yAxis', 'series'] })
}, { deep: true })
</script>

<template>
  <div id="main" class="h-300 w-330" />
</template>

<style scoped lang='scss'>
</style>
