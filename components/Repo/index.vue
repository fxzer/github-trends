<script setup lang='ts'>
import { formatSize } from '~/utils'

defineProps<{
  index: number
  color: string
  repo: any
}>()
</script>

<template>
  <div class="flex overflow-hidden border rounded-md p-1 space-x-4 dark:border-gray-600/80 hover:border-blue">
    <div class="min-wh-20 flex-center">
      <img v-if="index === 0" src="/rank/1.svg" alt="" class="wh-full">
      <img v-if="index === 1" src="/rank/2.svg" alt="" class="wh-full">
      <img v-if="index === 2" src="/rank/3.svg" alt="" class="wh-full">
      <span v-if="index > 2" class="text-3xl font-bold text-zinc-600">{{ index + 1 }}</span>
    </div>
    <div class="flex-1">
      <div>
        <div :style="{ color }">
          <a :href="repo.html_url" target="_blank" class="text-2xl">{{ repo.owner.login }}</a>
          <a :href="repo.clone_url" target="_blank" class="text-2xl">{{ repo.name }}</a>
        </div>
        <p class="my-1 max-w-200 truncate text-sm text-zinc">
          {{ repo.description }}
        </p>
      </div>
      <div class="flex text-zinc-500">
        <Icon name="material-symbols:kid-star-outline-sharp" class="mr-1" />{{ repo.stars }}
        <Icon name="charm:git-fork" class="ml-6 mr-1" />{{ repo.forks }}
        <Icon name="fluent:table-resize-column-24-regular" title="size" class="ml-6 mr-1" /> {{
          formatSize(repo.size) }}
        <Icon name="solar:eye-outline" class="ml-6 mr-1" /> {{ repo.watchers }}
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>
