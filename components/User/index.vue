<script setup lang='ts'>
import dayjs from '~/utils/day'

defineProps(['user'])
</script>

<template>
  <div class="flex items-center overflow-hidden border rounded-md p2 dark:border-gray-600/80 hover:border-blue">
    <img :src="user.avatar_url" class="mr-2 md:wh-15 wh-13 rounded-full">
    <div class="min-w-0 space-y-1">
      <a :href="user.html_url" target="_blank" class="text-lg">
        <span class="mr-2 font-semibold text-blue-500 hover:text-purple-500">{{ user.name }}</span>
        <span class="font-light text-slate-400 dark:text-slate-500/90">{{ user.login }}</span>
      </a>
      <div class="flex gap-3">
        <span class="flex-center gap-1" title="粉丝数量">
          <Icon name="ph:users-four" color="#9ca3af" /><span class="text-pink-500">{{ user.followers }}</span>
        </span>
        <span class="flex-center gap-1" title="仓库数量">
          <Icon name="teenyicons:git-outline" color="#9ca3af" /> <span class="text-violet-500">{{ user.public_repos }}</span>
        </span>
        <span class="flex-center gap-1" title="最近更新">
          <Icon name="ic:outline-update" color="#9ca3af" /><span class="text-green-500">{{ dayjs(user.updated_at).fromNow() }} </span>
        </span>
      </div>
      <div class="flex flex-wrap gap-3 text-slate-500 lt-md:text-xs">
        <span v-if="user.company" class="flex-center gap-1" title="公司">
          <Icon name="ph:buildings-bold" color="#9ca3af" /><span>{{ user.company }}</span>
        </span>
        <span v-if="user.location" class="flex-center gap-1" title="位置">
          <Icon name="ph:map-pin-line-bold" color="#9ca3af" /> <span>{{ user.location }}</span>
        </span>
        <span v-if="user.email" class="flex-center flex-nowrap gap-1" title="邮箱">
          <Icon name="material-symbols:attach-email-outline" color="#9ca3af" /><span>{{ user.email }}</span>
        </span>
      </div>
      <p class="text-blue-600 hover:text-purple-500">
        <a :href="user.blog" target="_blank">{{ user.blog }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
