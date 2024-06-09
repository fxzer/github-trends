import { breakpointsTailwind, useBreakpoints, useDebounceFn, useResizeObserver } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
export function useMobile() {
  const isMobile = ref(breakpoints.isSmaller('md'))
  // 防抖，只有在停止改变窗口大小后，才会执行
  const throttleResize = useDebounceFn(() => {
    isMobile.value = breakpoints.isSmaller('md')
  }, 300)
  onMounted(() => {
    useResizeObserver(document.body, throttleResize)
  })
  return { isMobile }
}
