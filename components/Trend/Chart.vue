<script setup lang='ts'>
import { deepClone } from '~/utils'

const data = inject('data') as any
const series = [{
  name: 'stars',
  color: 'rgb(159 ,224 ,128',
}, {
  name: 'forks',
  color: 'rgb(249 ,200 ,88',
}, {
  name: 'starup',
  color: 'rgb(238 ,102 ,102',
}].map(seriesItem)
const option = useChartOptions('趋势仓库总指标排行榜', series)
function handleData(data: Repo[]) {
  const dataCopy = deepClone(data)
  dataCopy.sort((a: Repo, b: Repo) => {
    const acount = a.starup + a.stars + a.forks
    const bcount = b.starup + b.stars + b.forks
    return acount - bcount
  })
  const [stars, forks, starup, names] = dataCopy.reduce((prev: any, item: any) => {
    prev[0].push(item.stars)
    prev[1].push(item.forks)
    prev[2].push(item.starup)
    prev[3].push(`${item.owner}/${item.name}`)
    return prev
  }, [[], [], [], []])
  option.value.yAxis.data = names
  option.value.series[0].data = stars
  option.value.series[1].data = forks
  option.value.series[2].data = starup
}

const { domRef: chartRef } = useEcharts(option, useChartBehaver)
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
