// import type * as echarts from 'echarts/core'
import type { ECOption } from './echarts'

export function useChartBehaver(chart: any, option: ECOption) {
  chart.on('click', (params: any) => {
    const { value = '', componentType } = params
    if (componentType === 'yAxis') {
      // 判断 value 是否 有() ,有则表示是开发者，用正则占位符的形式，取括号内的login内容
      const result = /\((.+?)\)/g.exec(value)
      const path = result ? result[1] : value
      window.open(`https://github.com/${path}`, '_blank')
    }
  })
  /** y 坐标文本悬浮高亮 */
  chart.on('mouseover', (params: any) => {
    const { componentType, tickIndex } = params
    if (componentType === 'yAxis') {
      chart.yIndex = tickIndex
      if (option.yAxis && option.yAxis.axisLabel) {
        option.yAxis.axisLabel!.formatter = (value: string, index: number) => {
          if (chart.yIndex && index === chart.yIndex)
            return `{b|${value}}`
          else
            return value
        }
      }
    }
  })
  // chart.on('mouseout', (params: any) => {
  //   const { componentType } = params
  //   if (componentType === 'yAxis')
  //     chart.yIndex = undefined
  // })
}
