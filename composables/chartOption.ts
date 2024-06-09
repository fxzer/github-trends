export function useChartOptions(title: string, series: any[] = []) {
  const legendData = series.map(item => item.name)
  return ref<any>({
    backgroundColor: 'transparent',
    title: {
      text: title,
      left: 'center',
    },
    legend: {
      data: legendData,
      // 位置
      right: 20,
      top: 'top',
    },
    grid: {
      left: 0,
      right: 20,
      bottom: 20,
      top: 40,
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: (params) => {
        const name = params[0].name
        let result = `<b>${name}</b>`
        params.forEach((item) => {
          result += `<br />${item.marker} ${item.seriesName}: ${formatNumber(item.value)}`
        })
        return result
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
