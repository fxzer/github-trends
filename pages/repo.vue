<script setup lang='ts'>
import dataMap from '~/data/repos.js'

const { view, language, color } = useMemoryRoute()
const repoList = computed(() => dataMap[`${language.value}`])
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
          <IconText title="size" icon="i-fluent:table-resize-column-24-regular" :text="formatSize(repo.size)" />
          <IconText title="updated_at" icon="i-ic:outline-update" :text="timeAgo(new Date(repo.updated_at))" :class="colorForUpdateAt(repo.updated_at)" />
        </template>
      </ViewList>
      <Table v-else-if="view === 'table'" />
      <RepoChart v-else-if="view === 'chart'" :data="repoList" />
    </Transition>
  </div>
</template>

<style scoped lang='scss'>

</style>
