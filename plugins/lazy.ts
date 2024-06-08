import { useIntersectionObserver } from '@vueuse/core'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy', {
    mounted(el, binding) {
      const { pause } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          pause()
        }
      })
    },
    updated(el, binding) {
      el.src = binding.value
    },

  })
})
