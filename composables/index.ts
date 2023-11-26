export function useStart() {
  return useState<any>('start', () => ref('start'))
}
