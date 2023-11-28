<script setup lang='ts'>
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { type DateRange, type Language, type Repo, langColors, strToNumber } from '../utils'
import dataMap from '~/data/trending/index.js'

gsap.registerPlugin(ScrollTrigger)

const dateRange = ref<DateRange>('daily')
const language = ref<Language>('JavaScript')
const currentData = ref<Repo[]>([])
const view = ref<'list' | 'chart'>('list')

function sortByStarup(data: Repo[]) {
  return data.sort((a: Repo, b: Repo) => strToNumber(b.starup) - strToNumber(a.starup))
}
watch([dateRange, language], () => {
  currentData.value = sortByStarup(dataMap[`${language.value}-${dateRange.value}`])
}, { immediate: true })
onMounted(() => {
  gsap.utils.toArray('.repo-item').forEach((item: any) => {
    gsap.from(item, {
      scrollTrigger: item,
      y: 100,
      duration: 0.6,
    })
  })
})
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-around">
      <DateRange v-model="dateRange" />
      <Language v-model="language" />
      <div class="flex cursor-pointer space-x-2 dark:text-zinc-300">
        <Icon name="mdi:format-list-bulleted-square" size="26" :class="view === 'list' ? 'text-lime-500' : ''" @click="view = 'list'" />
        <Icon name="lucide:bar-chart-horizontal" :class="view === 'chart' ? 'text-lime-500' : ''" @click="view = 'chart'" />
      </div>
    </div>
    <template v-if="view === 'list'">
      <RepoItem v-for="(item, index) in currentData" :key="index" class="repo-item" :index="index" :repo="item" :color="langColors[language]" />
    </template>
    <Chart v-else :data="currentData" />
  </div>
</template>

<style scoped lang='scss'>

</style>
