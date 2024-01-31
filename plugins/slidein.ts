const DURATION = 500
const animationMap = new WeakMap<HTMLElement, Animation>()
let ob: any
// 判断是否在视口下方
function isBelowViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top > window.innerHeight
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('slidein', {

    mounted(el: HTMLElement, binding: any) {
      ob = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { target } = entry
          if (entry.isIntersecting) {
            const animation = animationMap.get(target as HTMLElement)
            animation?.play()
            ob.unobserve(target) // 取消观察，避免向上滚动时重复触发
          }
        })
      })
      // 视口上方的元素不做处理
      if (!isBelowViewport(el))
        return

      // distance: 挂载后Y轴偏移的距离
      const { value: distance = 100 } = binding
      const animation = el.animate([
        {
          transform: `translateY(${distance}px)`,
          opacity: 0,
        },
        {
          transform: 'translateY(0)',
          opacity: 1,
        },
      ], {
        duration: DURATION,
        easing: 'ease-in-out',
      })
      animation.pause()
      animationMap.set(el, animation)
      ob.observe(el)
    },
    unmounted(el: HTMLElement) {
      ob.unobserve(el)
    },

  })
})
