export function useChartBehaver(chart: any, chartOptions: Ref<any>) {
  chart.on('click', (params: any) => {
    const { value = '', componentType } = params
    if (componentType === 'yAxis')
      window.open(`https://github.com/${value}`, '_blank')
  })
  /** y 坐标文本悬浮高亮 */
  chart.on('mouseover', (params: any) => {
    const { componentType, tickIndex } = params
    if (componentType === 'yAxis') {
      chart.yIndex = tickIndex
      chart.setOption(chartOptions.value)
    }
  })
  chart.on('mouseout', (params: any) => {
    const { componentType } = params
    if (componentType === 'yAxis') {
      chart.yIndex = undefined
      chart.setOption(chartOptions.value)
    }
  })
}
