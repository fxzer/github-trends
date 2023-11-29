<script setup lang='ts'>
import { type DateRange, type Language, type Repo, langColors, strToNumber } from '../utils'
import dataMap from '~/data/trending.js'

const dateRange = ref<DateRange>('daily')
const language = ref<Language>('JavaScript')
const currentData = ref<Repo[]>([])
const view = ref<'list' | 'chart' | 'starup-chart'>('list')

function sortByStarup(data: Repo[]) {
  return data.sort((a: Repo, b: Repo) => strToNumber(b.starup) - strToNumber(a.starup))
}
watch([dateRange, language], () => {
  currentData.value = sortByStarup(dataMap[`${language.value}-${dateRange.value}`])
}, { immediate: true })
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-around">
      <DateRange v-model="dateRange" />
      <Language v-model="language" />
      <Views v-model="view" :show-starup="true" />
    </div>
    <template v-if="view === 'list'">
      <TrendRepo v-for="(item, index) in currentData" :key="index" class="repo-item" :index="index" :repo="item" :color="langColors[language]" />
    </template>
    <TrendChart v-else-if="view === 'chart'" :data="currentData" />
    <TrendStarupChart v-else :data="currentData" />
  </div>
</template>

<style scoped lang='scss'>

</style>
