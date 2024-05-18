<script setup lang='ts'>
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
    barWidth: 20,
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
  const colors = ['rgb(159 ,224 ,128', 'rgb(249 ,200 ,88', 'rgb(238 ,102 ,102', 'rgb(129 ,140 ,248', 'rgba(156,107,211', 'rgba(248,195,248', 'rgba(100,255,249', 'rgba(244 ,114 ,182', 'rgba(255, 70 ,21', 'rgba(72 ,144 ,255']
  const names: string[] = []
  const seriesData = dataCopy.map((item: Repo, index: number) => {
    names.push(`${item.owner}/${item.name}`)
    return {
      value: strToNumber(item.starup),
      name: `${item.owner}/${item.name}`,
      itemStyle: itemStyle(colors[index % colors.length]),
    }
  })
  option.value.series[0].data = seriesData
  option.value.yAxis.data = names
}
watch(data, () => {
  handleData(data.value)
}, { deep: true, immediate: true })
const height = `${100 + data.value.length * 40}px`
</script>

<template>
  <div ref="chartRef" :style="{ height }" />
</template>

<style scoped lang='scss'>
</style>
