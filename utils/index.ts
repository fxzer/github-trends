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

export function formatDate(date: Date, format: string): string {
  const map: { [key: string]: string } = {
    YYYY: date.getFullYear().toString(),
    MM: (date.getMonth() + 1).toString().padStart(2, '0'),
    DD: date.getDate().toString().padStart(2, '0'),
    HH: date.getHours().toString().padStart(2, '0'),
    mm: date.getMinutes().toString().padStart(2, '0'),
    ss: date.getSeconds().toString().padStart(2, '0'),
  }
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, matched => map[matched])
}

export function timeAgo(date: Date) {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)
  if (years > 0)
    return `${years} 年前`
  if (months > 0)
    return `${months} 月前`
  if (days > 0)
    return `${days} 天前`
  if (hours > 0)
    return `${hours} 小时前`
  if (minutes > 0)
    return `${minutes} 分钟前`
  if (seconds > 0)
    return `${seconds} 秒前`
  return '刚刚'
}

// 格式化 num 数量
export function formatNumber(n: number) {
  if (typeof n === 'string') {
    if (Number.isNaN(Number.parseInt(n))) {
      return n
    }
    else {
      n = strToNumber(n)
    }
  }
  if (n < 1000)
    return n
  else
    return `${(n / 1000).toFixed(1)}k`
}

export function colorForUpdateAt(updateAt: string) {
  const diff = new Date().getTime() - new Date(updateAt).getTime()
  if (diff < 1000 * 60 * 60 * 24) {
    return 'text-green op60'
  }
  else if (diff < 1000 * 60 * 60 * 24 * 7) {
    return 'text-lime op60'
  }
  else {
    return 'text-gray'
  }
}
