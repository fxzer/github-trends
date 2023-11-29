export * from './constants'

export function strToNumber(str: string) {
  return Number(str.replace(',', ''))
}

export function deepClone(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}
// 将数据大小转位KB、MB、GB
export function formatSize(size: number) {
  if (size < 1024)
    return `${size}KB`
  else if (size < 1024 * 1024)
    return `${(size / 1024).toFixed(2)}MB`
  else
    return `${(size / 1024 / 1024).toFixed(2)}GB`
}
