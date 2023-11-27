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
export type DateRange = typeof DATE_RANGE_LIST[number]['value']
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
export type Language = typeof LANGUAGE_LIST[number]

export type Repo  = {
  title: string
  path: string
  owner: string
  name: string
  link: string
  desciption: string
  language: string
  stars: string
  forks: string
  starup: string
}

export const langColors = {
  JavaScript: '#e5b12d',
  TypeScript: '#1D74C1',
  Vue: '#44C089',
} 
