<script setup lang='ts'>
import { type Language, langColors } from '../utils'
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
    <div v-if="view === 'list'" space-y-3>
      <RepoItem v-for="(item, index) in repoList" :key="index" :index="index" :repo="item" :color="langColors[language]">
        <template #title="{ repo }">
          <RepoTitle :color="langColors[language]" :owner="repo.owner.login" :name="repo.name" />
        </template>
        <template #icons="{ repo }">
          <IconText title="size" icon-name="fluent:table-resize-column-24-regular" :text="formatSize(repo.size)" />
          <IconText title="wathcer" icon-name="solar:eye-outline" :text="repo.watchers" />
        </template>
      </RepoItem>
    </div>
    <RepoChart v-else-if="view === 'chart'" :data="repoList" />
  </div>
</template>

<style scoped lang='scss'>

</style>
