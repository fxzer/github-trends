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
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  chart = echarts.init(document.getElementById('main'))
  const stars: number[] = []; const forks: number[] = []; const starup: number[] = []; const names: string[] = []
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
  chart.setOption(chartOptions.value)
  // 绘制图表
  // chart.setOption({
  //   title: {
  //     text: 'ECharts 入门示例',
  //   },
  //   tooltip: {},
  //   xAxis: {
  //     type: 'value',
  //     boundaryGap: [0, 0.01],
  //   },
  //   yAxis: {
  //     type: 'category',
  //     data: names,
  //     // 设置 y 轴文本标签的内容的宽度
  //     axisLabel: {
  //       width: 300,
  //     },
  //   },
  //   series: [
  //     {
  //       name: 'stars',
  //       type: 'bar',
  //       stack: 'total',
  //       label: {
  //         show: true,
  //       },
  //       emphasis: {
  //         focus: 'series',
  //       },
  //       data: stars,
  //     },
  //     {
  //       name: 'forks',
  //       type: 'bar',
  //       stack: 'total',
  //       label: {
  //         show: true,
  //       },
  //       emphasis: {
  //         focus: 'series',
  //       },
  //       data: forks,
  //     },
  //     {
  //       name: 'starup',
  //       type: 'bar',
  //       stack: 'total',
  //       label: {
  //         show: true,
  //       },
  //       emphasis: {
  //         focus: 'series',
  //       },
  //       data: starup,
  //     },
  //   ],
  // })
})
watch(data, () => {
  console.log('[ data ]-145', data)
//   const newOptons = deepClone(chartOptions.value)
//   const stars: number[] = []; const forks: number[] = []; const starup: number[] = []; const names: string[] = []
//   dataCopy.sort((a: Repo, b: Repo) => {
//     const acount = strToNumber(a.starup) + strToNumber(a.stars) + strToNumber(a.forks)
//     const bcount = strToNumber(b.starup) + strToNumber(b.stars) + strToNumber(b.forks)
//     return acount - bcount
//   })
//   dataCopy.forEach((item: Repo) => {
//     stars.push(strToNumber(item.stars))
//     forks.push(strToNumber(item.forks))
//     starup.push(strToNumber(item.starup))
//     names.push(`${item.owner}${item.name}`)
//   })
//   newOptons.value.yAxis.data = names
//   newOptons.value.series[0].data = stars
//   newOptons.value.series[1].data = forks
//   newOptons.value.series[2].data = starup
//   chart.setOption(newOptons, true, false)
})
</script>

<template>
  <div id="main" class="h-300 w-330" />
</template>

<style scoped lang='scss'>
</style>
