<script setup lang='ts'>
const props = defineProps<{
  data: any[]
}>()

const series = [{
  name: 'stars',
  color: 'rgb(159 ,224 ,128',
}, {
  name: 'forks',
  color: 'rgb(249 ,200 ,88',
}, {
  name: 'watchers',
  color: 'rgb(129 ,140 ,248',
}].map(seriesItem)
const { data } = toRefs(props)

const option = useChartOptions('仓库人气榜', series)
const { domRef: chartRef } = useEcharts(option, useChartBehaver)

function dataHandle(data: any) {
  const [stars, forks, watchers, names] = data.reduce((prev: any, item: any) => {
    prev[0].unshift(item.stars)
    prev[1].unshift(item.forks)
    prev[2].unshift(item.watchers)
    prev[3].unshift(item.full_name)
    return prev
  }, [[], [], [], []])
  option.value.yAxis.data = names
  option.value.series[0].data = stars
  option.value.series[1].data = forks
  option.value.series[2].data = watchers
}

watch(data, () => {
  dataHandle(data.value)
}, { deep: true, immediate: true })
const height = `${100 + data.value.length * 40}px`
</script>

<template>
  <div ref="chartRef" :style="{ height }" />
</template>

<style scoped lang='scss'>
</style>
