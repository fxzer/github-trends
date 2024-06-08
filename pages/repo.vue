<script setup lang='ts'>
import dataMap from '~/data/repos.js'

const { view, language, color } = useMemoryRoute()
const repoList = computed(() => dataMap[`${language.value}`].map((item: any) => {
  return {
    ...item,
    avatar: item.owner.avatar_url,
    owner: item.owner.login,
    name: item.name,
  }
}))
provide('data', repoList)
provide('color', color)
</script>

<template>
  <div>
    <FilterWrap>
      <Language v-model="language" />
      <Views v-model="view" />
    </FilterWrap>
    <Transition name="fade-top" mode="out-in">
      <ViewList v-if="view === 'list'">
        <template #icons="{ repo }">
          <IconText title="size" icon-name="fluent:table-resize-column-24-regular" :text="formatSize(repo.size)" />
        </template>
      </ViewList>
      <Table v-else-if="view === 'table'" />
      <RepoChart v-else-if="view === 'chart'" :data="repoList" />
    </Transition>
  </div>
</template>

<style scoped lang='scss'>

</style>
