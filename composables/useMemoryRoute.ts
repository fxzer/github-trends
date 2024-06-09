import { type UserRange, langColors } from '~/utils'

const { isMobile } = useMobile()
export function useMemoryRoute() {
  const router = useRouter()
  const route = useRoute()

  const view = ref<View>('table')
  const dateRange = ref<DateRange>('daily')
  const language = ref<Language>('JavaScript')
  const userRange = ref<UserRange>('Global')
  const color = computed(() => langColors[language.value])

  watch(() => route.query, (val) => {
    const { d = 'daily', l = 'JavaScript', v = 'table', u = 'Global' } = val
    dateRange.value = d as DateRange
    language.value = l as Language
    userRange.value = u as UserRange
    view.value = isMobile.value && v === 'table' ? 'list' : v as View
  }, { immediate: true })

  // 分开监听，避免无限循环
  watch(language, (l) => {
    router.push({ query: { ...route.query, l } })
  })
  watch(view, (v) => {
    router.push({ query: { ...route.query, v } })
  })
  watch(dateRange, (d) => {
    router.push({ query: { ...route.query, d } })
  })
  watch(userRange, (u) => {
    router.push({ query: { ...route.query, u } })
  })

  return { view, dateRange, language, color, userRange }
}
