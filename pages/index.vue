<script setup lang='ts'>
import { type DateRange, type Language, type Repo, langColors, strToNumber } from '../utils'
import dataMap from '~/data/trending.js'

const dateRange = ref<DateRange>('daily')
const language = ref<Language>('JavaScript')

const currentData = ref<Repo[]>([])
const view = ref<'list' | 'table' | 'chart' | 'starup-chart'>('list')
const color = computed(() => langColors[language.value])
provide('color', color)
provide('data', currentData)

function sortByStarup(data: Repo[]) {
  return data.sort((a: Repo, b: Repo) => strToNumber(b.starup) - strToNumber(a.starup))
}
watch([dateRange, language], () => {
  currentData.value = sortByStarup(dataMap[`${language.value}-${dateRange.value}`])
}, { immediate: true })
</script>

<template>
  <div>
    <FilterWrap>
      <DateRange v-model="dateRange" />
      <Language v-model="language" />
      <Views v-model="view" :show-starup="true" />
    </FilterWrap>
    <Transition name="fade-top" mode="out-in">
      <ViewList v-if="view === 'list'">
        <template #icons="{ repo }">
          <IconText title="starup" icon-name="ph:star-half-bold" :text="repo.starup" text-red />
        </template>
      </ViewList>
      <Table v-else-if="view === 'table'" has-starup />
      <TrendChart v-else-if="view === 'chart'" />
      <TrendStarupChart v-else :data="currentData" />
    </Transition>
  </div>
</template>

<style scoped lang='scss'>

</style>
