export function useChartOptions(title: string, series: any[] = []) {
  const legendData = series.map(item => item.name)
  return ref<any>({
    title: {
      text: title,
      left: 'center',
    },
    legend: {
      data: legendData,
      // 位置
      left: 'right',
      top: 'top',
    },
    grid: {
      left: 80,
      right: 0,
      bottom: 20,
      top: 30,
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: {
      // 分隔线
      splitLine: {
        lineStyle: {
          color: '#99999970',
        },
      },
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: [],
      triggerEvent: true,
      axisLabel: {
        rich: {
          b: {
            color: '#3D82F6',
            align: 'center',
          },
        },
      },
    },
    series,
  })
}
