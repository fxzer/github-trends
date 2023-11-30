<script setup lang='ts'>
import { type Language, type Repo, langColors } from '../utils'
import dataMap from '~/data/repos.js'

const repoList = ref<any[]>([])
const language = ref<Language>('JavaScript')
watch([language], () => {
  repoList.value = dataMap[`${language.value}`]
}, { immediate: true })

const view = ref<'list' | 'chart'>('list')
</script>

<template>
  <div>
    <FilterWrap>
      <Language v-model="language" />
      <Views v-model="view" />
    </FilterWrap>
    <div v-if="view === 'list'" class="space-y-3">
      <Repo v-for="(item, index) in repoList" :key="index" class="repo-item" :index="index" :repo="item" :color="langColors[language]" />
    </div>
    <RepoChart v-else-if="view === 'chart'" :data="repoList" />
  </div>
</template>

<style scoped lang='scss'>

</style>
