<script setup lang='ts'>
const data = inject('data')
const series = [{
  name: '粉丝',
  color: 'rgb(244 ,114 ,182',
}, {
  name: '仓库',
  color: 'rgb(72 ,144 ,255',
}].map(seriesItem)

const option = useChartOptions('人气开发榜', series)
const { domRef: chartRef } = useEcharts(option, useChartBehaver)

function dataHandle(data: any) {
  const [followers, public_repos, names] = data.reduce((prev: any, item: any) => {
    prev[0].unshift(item.followers)
    prev[1].unshift(item.public_repos)
    prev[2].unshift(`${item.name} (${item.login})`)
    return prev
  }, [[], [], []])
  option.value.yAxis.data = names
  option.value.series[0].data = followers
  option.value.series[1].data = public_repos
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
