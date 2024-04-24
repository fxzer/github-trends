const DURATION = 500
const animationMap = new WeakMap<HTMLElement, Animation>()
// 判断是否在视口下方
function isBelowViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top > window.innerHeight
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('slidein', {

    mounted(el: HTMLElement, binding: any) {
      // 视口上方的元素不做处理
      if (!isBelowViewport(el))
        return
      const { pause } = useIntersectionObserver(el, ([{ target, isIntersecting }]) => {
        if (isIntersecting) {
          const animation = animationMap.get(target as HTMLElement)
          animation?.play()
          pause()
        }
      })

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
    },

  })
})
