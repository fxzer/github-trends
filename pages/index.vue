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
  <div>
    <FilterWrap>
      <DateRange v-model="dateRange" />
      <Language v-model="language" />
      <Views v-model="view" :show-starup="true" />
    </FilterWrap>
    <div v-if="view === 'list'" space-y-3>
      <RepoItem v-for="(item, index) in currentData" :key="index" :index="index" :repo="item">
        <template #title="{ repo }">
          <RepoTitle :color="langColors[language]" :owner="repo.owner" :name="repo.name" />
        </template>
        <template #icons="{ repo }">
          <IconText title="starup" icon-name="ph:star-half-bold" :text="repo.starup" text-red-500 />
        </template>
        <template #trendsvg="{ repo }">
          <div hidden lg="block h-20 w-50">
            <el-image
              lazy
              wh-full
              :src="`https://starchart.cc${repo.path}.svg`"
              :zoom-rate="1.2"
              :max-scale="4"
              :min-scale="0.5"
              :preview-src-list="[`https://starchart.cc${repo.path}.svg`]"
              :initial-index="40"
              fit="cover"
            />
          </div>
        </template>
      </RepoItem>
    </div>
    <TrendChart v-else-if="view === 'chart'" :data="currentData" />
    <TrendStarupChart v-else :data="currentData" />
  </div>
</template>

<style scoped lang='scss'>

</style>
