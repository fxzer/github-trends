export * from './constants'

export function strToNumber(str: string) {
  return Number(str.replace(',', ''))
}

export function deepClone(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}
