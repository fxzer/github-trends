<script setup lang='ts'>
import { deepClone, strToNumber } from '~/utils'

const props = defineProps<{
  data: any[]
}>()
const { data } = toRefs(props)

const series = [
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
]
const option = useChartOptions('仓库飙升榜', series)
function handleData(data: Repo[]) {
  const dataCopy = deepClone(data)
  dataCopy.sort((a: Repo, b: Repo) => {
    const acount = strToNumber(a.starup) + strToNumber(a.stars) + strToNumber(a.forks)
    const bcount = strToNumber(b.starup) + strToNumber(b.stars) + strToNumber(b.forks)
    return acount - bcount
  })
  const [stars, forks, starup, names] = dataCopy.reduce((prev: any, item: any) => {
    prev[0].push(strToNumber(item.stars))
    prev[1].push(strToNumber(item.forks))
    prev[2].push(strToNumber(item.starup))
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
