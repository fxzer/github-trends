<script setup lang='ts'>
import { formatSize } from '~/utils'

defineProps<{
  index: number
  color: string
  repo: any
}>()
</script>

<template>
  <div class="flex overflow-hidden border rounded-md p-1 space-x-2 dark:border-gray-600/80 hover:border-blue md:space-x-4">
    <div class="w-10 flex-center flex-shrink-0 overflow-hidden lg:w-20 sm:w-15">
      <img v-if="index === 0" src="/rank/1.svg" alt="1" class="wh-full">
      <img v-if="index === 1" src="/rank/2.svg" alt="2" class="wh-full">
      <img v-if="index === 2" src="/rank/3.svg" alt="3" class="wh-full">
      <span v-if="index > 2" class="gradient-text text-xl font-bold md:text-3xl">{{ index + 1 }}</span>
    </div>
    <div class="min-w-0 flex-1">
      <div>
        <div class="break-words text-lg md:text-2xl" :style="{ color }">
          <a :href="repo.html_url" target="_blank" class="hover:text-purple-500">{{ repo.owner.login }}</a>
          <a :href="repo.clone_url" target="_blank" class="hover:text-purple-500">{{ repo.name }}</a>
        </div>
        <p class="my-1 text-xs text-zinc clamp-3 md:clamp-2">
          {{ repo.description }}
        </p>
      </div>
      <div class="flex transform-origin-lc text-zinc-500 lt-md:scale-72">
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
