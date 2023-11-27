<script setup lang='ts'>
import { type DateRange, type Language, type Repo, langColors } from '../utils'
import dataMap from '~/data/trending/index.js'

const dateRange = ref<DateRange>('daily')
const language = ref<Language>('JavaScript')
const currentData = ref<Repo[]>([])

function sortByStarup(data: Repo[]) {
  return data.sort((a: Repo, b: Repo) => Number(b.starup.replace(',', '')) - Number(a.starup.replace(',', '')))
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
    </div>
    <RepoItem v-for="(item, index) in currentData" :key="index" :index="index" :repo="item" :color="langColors[language]" />
  </div>
</template>

<style scoped lang='scss'>

</style>
