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
const { onMouseEnter } = useMouseEnter()
</script>

<template>
  <div>
    <FilterWrap>
      <DateRange v-model="dateRange" />
      <Language v-model="language" />
      <Views v-model="view" :show-starup="true" />
    </FilterWrap>
    <Transition name="fade-top" mode="out-in">
      <div v-if="view === 'list'" grid="~ lg:cols-2 gap-2" class="relative">
        <div class="pointer absolute left-0 top-0 border-2 op0 transition-all duration-300" />
        <RepoItem v-for="(item, index) in currentData" :key="index" :index="index" :repo="item" @mouseenter="onMouseEnter">
          <template #avatar="{ repo }">
            <LazyImage :src="repo.avatar" />
          </template>
          <template #title="{ repo }">
            <RepoTitle :color="langColors[language]" :owner="repo.owner" :name="repo.name" />
          </template>
          <template #icons="{ repo }">
            <IconText title="starup" icon-name="ph:star-half-bold" :text="repo.starup" text-red-500 />
          </template>
        </RepoItem>
      </div>
      <TrendChart v-else-if="view === 'chart'" :data="currentData" />
      <TrendStarupChart v-else :data="currentData" />
    </Transition>
  </div>
</template>

<style scoped lang='scss'>

</style>
