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
  <div class="space-y-4">
    <div class="flex items-center justify-around">
      <slot name="date-range" />
      <Language v-model="language" />
      <Views v-model="view" />
    </div>
    <template v-if="view === 'list'">
      <Repo v-for="(item, index) in repoList" :key="index" class="repo-item" :index="index" :repo="item" :color="langColors[language]" />
    </template>
    <RepoChart v-else-if="view === 'chart'" :data="repoList" />
  </div>
</template>

<style scoped lang='scss'>

</style>
