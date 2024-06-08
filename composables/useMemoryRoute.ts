import { langColors } from '~/utils'

export function useMemoryRoute() {
  const router = useRouter()
  const view = ref<View>('list')
  const dateRange = ref<DateRange>('daily')
  const language = ref<Language>('JavaScript')
  const color = computed(() => langColors[language.value])
  const route = useRoute()

  watch(() => route.query, (val) => {
    const { d = 'daily', l = 'JavaScript', v = 'list' } = val
    dateRange.value = d as DateRange
    language.value = l as Language
    view.value = v as View
  }, { immediate: true })

  watch([language, view, dateRange], ([l, v, d]) => {
    router.push({ query: { d, l, v } })
  })
  return { view, dateRange, language, color }
}
