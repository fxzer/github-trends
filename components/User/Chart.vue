<script setup lang='ts'>
const props = defineProps<{
  data: any[]
}>()

const series = [
  {
    name: '粉丝',
    type: 'bar',
    stack: 'total',
    // 颜色
    itemStyle: {
      color: '#f472b6',
    },
    label: {
      show: true,
      color: '#fff',
    },
    emphasis: {
      focus: 'series',
    },
  },
  {
    name: '仓库',
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
]
const { data } = toRefs(props)

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
