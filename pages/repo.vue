<script setup lang='ts'>
import { type Language, langColors } from '../utils'
import dataMap from '~/data/repos.js'

const repoList = ref<any[]>([])
const language = ref<Language>('JavaScript')
watch([language], () => {
  repoList.value = dataMap[`${language.value}`]
}, { immediate: true })

const view = ref<'list' | 'chart'>('list')
const { onMouseEnter } = useMouseEnter()
</script>

<template>
  <div>
    <FilterWrap>
      <Language v-model="language" />
      <Views v-model="view" />
    </FilterWrap>
    <Transition name="fade-top" mode="out-in">
      <div v-if="view === 'list'" grid="~ lg:cols-2 gap-2" class="relative">
        <div class="pointer absolute left-0 top-0 border-2 op0 transition-all duration-300" />
        <RepoItem v-for="(item, index) in repoList" :key="index" :index="index" :repo="item" :color="langColors[language]" @mouseenter="onMouseEnter">
          <template #avatar="{ repo }">
            <LazyImage :src="repo.owner.avatar_url" />
          </template>
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
    </Transition>
  </div>
</template>

<style scoped lang='scss'>

</style>
