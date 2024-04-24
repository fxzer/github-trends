export function useMouseEnter() {
  const scrollY = ref(0)
  const gap = 4
  function onMouseEnter(e: MouseEvent) {
    const el = e.target as HTMLElement
    const { x, y, width, height } = el.getBoundingClientRect()
    const pointer = document.querySelector('.pointer') as HTMLElement
    pointer.style.transform = `translate(${x - gap}px, ${y + scrollY.value - gap}px)`
    pointer.style.width = `${width + gap * 2}px`
    pointer.style.height = `${height + gap * 2}px`
    pointer.style.opacity = '1'
  }
  function onScroll() {
    scrollY.value = window.scrollY
  }
  onMounted(() => {
    window?.addEventListener('scroll', onScroll)
  })
  onUnmounted(() => {
    window?.removeEventListener('scroll', onScroll)
  })
  return { onMouseEnter }
}
