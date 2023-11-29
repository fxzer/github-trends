<script setup lang='ts'>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

defineProps(['user'])


dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  relativeTime: {
    past: '%s前',
    s: '几秒',
    m: "几分钟",
    mm: "%d 分钟",
    h: "an 小时",
    hh: "%d 小时",
    d: "一天",
    dd: "%d 天",
    M: "一月",
    MM: "%d 月",
    y: "一年",
    yy: "%d 年"
  },
})
</script>

<template>
  <div class="users-center flex border rounded-md p2 dark:border-gray-600/80 hover:border-blue">
    <img :src="user.avatar_url" class="mr-2 wh-15 rounded-full">
    <div class="space-y-1">
      <a :href="user.html_url" target="_blank" class="text-lg">
        <span class="mr-2 font-semibold text-blue-500">{{ user.name }}</span>
        <span class="text-slate-400 dark:text-slate-500/90">{{ user.login }}</span>
      </a>
      <div class="flex space-x-3">
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
      <div class="flex text-slate-500 space-x-3">
        <span v-if="user.company" class="flex-center gap-1" title="公司">
          <Icon name="ph:buildings-bold" color="#9ca3af" /><span>{{ user.company }}</span>
        </span>
        <span v-if="user.location" class="flex-center gap-1" title="位置">
          <Icon name="ph:map-pin-line-bold" color="#9ca3af" /> <span>{{ user.location }}</span>
        </span>
        <span v-if="user.email" class="flex-center gap-1" title="邮箱">
          <Icon name="material-symbols:attach-email-outline" color="#9ca3af" /><span>{{ user.email }}</span>
        </span>
      </div>
      <p class="text-blue-600">
        <a :href="user.blog" target="_blank">{{ user.blog }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
