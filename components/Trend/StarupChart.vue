<script setup lang='ts'>
import * as echarts from 'echarts'
import { deepClone, strToNumber } from '~/utils'

const props = defineProps<{
  data: Repo[]
}>()
const { data } = toRefs(props)
const series = [
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

]
const option = useChartOptions('Star飙升榜', series)
const { domRef: chartRef } = useEcharts(option, useChartBehaver)
function handleData(data: Repo[]) {
  const dataCopy = deepClone(data)
  dataCopy.sort((a: Repo, b: Repo) => strToNumber(a.starup) - strToNumber(b.starup))
  const [starup, names] = dataCopy.reduce((prev: any, item: any) => {
    prev[0].push(strToNumber(item.starup))
    prev[1].push(`${item.owner}/${item.name}`)
    return prev
  }, [[], []])
  option.value.yAxis.data = names
  option.value.series[0].data = starup
}
watch(data, () => {
  handleData(data.value)
}, { deep: true, immediate: true })
</script>

<template>
  <div ref="chartRef" class="h-300 w-330" />
</template>

<style scoped lang='scss'>
</style>
