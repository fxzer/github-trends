export type DateRange = typeof DATE_RANGE_LIST[number]['value']
export const DATE_RANGE_LIST = [
  {
    label: '日榜',
    value: 'daily',
  },
  {
    label: '周榜',
    value: 'weekly',
  },
  {
    label: '月榜',
    value: 'monthly',
  },
] as const
export const USER_RANGES = [
  {
    label: '全球',
    value: 'Global',
  },
  {
    label: '中国',
    value: 'China',
  },
] as const
export type UserRange = typeof USER_RANGES[number]['value']
export type View = 'list' | 'table' | 'chart' | 'starup-chart'
export type Language = typeof LANGUAGE_LIST[number]
export const LANGUAGE_LIST = [
  'JavaScript',
  'TypeScript',
  'Vue',
  // 'Svelte',
  // 'Python',
  // 'Java',
  // 'Rust',
  // 'Ruby',
  // 'C++',
  // 'C#',
  // 'Go',
  // 'C',
] as const

export interface Repo {
  title: string
  path: string
  owner: string
  name: string
  ourl: string // owner  url
  url: string // repo url
  description: string
  language: string
  stars: number
  forks: number
  starup: number
}

export const langColors = {
  JavaScript: '#e5b12d',
  TypeScript: '#1D74C1',
  Vue: '#44C089',
}
