<script setup lang='ts'>
import type { Repo } from '~/utils'

defineProps<{
  index: number
  color: string
  repo: Repo
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
        <div :style="{ color }" class="break-words text-lg md:text-2xl">
          <a :href="repo.link" target="_blank" class="hover:text-purple-500">{{ repo.owner }}/</a>
          <a :href="repo.link" target="_blank" class="hover:text-purple-500">{{ repo.name }}</a>
        </div>
        <p class="my-1 text-xs text-zinc clamp-3 md:clamp-2">
          {{ repo.description }}
        </p>
      </div>
      <div class="flex text-zinc-500">
        <Icon name="material-symbols:kid-star-outline-sharp" class="mr-1" />{{ repo.stars }}
        <Icon name="charm:git-fork" class="ml-6 mr-1" />{{ repo.forks }}
        <Icon name="ph:star-half-bold" class="ml-6 mr-1" color="#ef4444" />
        <span class="text-red-500">{{ repo.starup }}</span>
      </div>
    </div>
    <div class="hidden lg:(block h-20 w-50)">
      <el-image
        lazy
        class="h-full w-full"
        :src="`https://starchart.cc${repo.path}.svg`"
        :zoom-rate="1.2"
        :max-scale="4"
        :min-scale="0.5"
        :preview-src-list="[`https://starchart.cc${repo.path}.svg`]"
        :initial-index="40"
        fit="cover"
      />
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
