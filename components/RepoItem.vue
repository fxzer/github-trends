<script setup lang='ts'>
import type { Repo } from '~/utils'

defineProps<{
  index: number
  color: string
  repo: Repo
}>()
</script>

<template>
  <div class="flex border rounded-md p-1 space-x-4 dark:border-gray-600/80 hover:border-blue">
    <div class="wh-20 flex-center">
      <img v-if="index === 0" src="/rank/1.svg" alt="" class="wh-full">
      <img v-if="index === 1" src="/rank/2.svg" alt="" class="wh-full">
      <img v-if="index === 2" src="/rank/3.svg" alt="" class="wh-full">
      <span v-if="index > 2" class="text-3xl font-bold text-zinc-600">{{ index + 1 }}</span>
    </div>
    <div class="flex-1">
      <div>
        <div :style="{ color }">
          <a :href="repo.link" target="_blank" class="text-2xl">{{ repo.owner }}</a>
          <a :href="repo.link" target="_blank" class="text-2xl">{{ repo.name }}</a>
        </div>
        <p class="my-1 max-w-200 truncate text-xs text-zinc">
          {{ repo.desciption }}
        </p>
      </div>
      <div class="flex text-zinc-500">
        <Icon name="material-symbols:kid-star-outline-sharp" size="16px" class="mr-1" />{{ repo.stars }}
        <Icon name="charm:git-fork" size="16px" class="ml-6 mr-1" />{{ repo.forks }}
        <Icon name="ph:star-half-bold" size="16px" class="ml-6 mr-1" color="#ef4444" />
        <span class="text-red-500">{{ repo.starup }}</span>
      </div>
    </div>
    <!-- <img src="https://starchart.cc/fanmingming/live.svg" alt="" class="wh-full"> -->
    <el-image
      lazy
      class="h-20 w-50"
      :src="`https://starchart.cc${repo.path}.svg`"
      :zoom-rate="1.2"
      :max-scale="4"
      :min-scale="0.5"
      :preview-src-list="[`https://starchart.cc${repo.path}.svg`]"
      :initial-index="40"
      fit="cover"
    />
  </div>
</template>

<style scoped lang='scss'>

</style>
