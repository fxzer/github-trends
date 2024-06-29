<script setup lang='ts'>
import type { Repo } from '../utils'
import dataMap from '~/data/trending.js'

const { view, dateRange, language, color } = useMemoryRoute()
const currentData = computed<Repo[]>(() => sortByStarup(dataMap[`${language.value}-${dateRange.value}`]))
provide('color', color)
provide('data', currentData)

function sortByStarup(data: Repo[]) {
  return data.sort((a: Repo, b: Repo) => b.starup - a.starup)
}
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
          <IconText title="starup" icon="i-ph:star-half-bold" :text="repo.starup" text-red />
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
