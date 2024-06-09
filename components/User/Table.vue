<script setup lang='ts'>
const data = inject('data') as any
const tableHead = computed(() => ({
  avatar: 'Avatar',
  name: 'Name / Login',
  followers: 'Followers',
  public_repos: 'Public Repos',
  email: 'Email',
  blog: 'Blog',
}))
const tableData = computed(() => {
  return [tableHead.value, ...data.value]
})
</script>

<template>
  <div class="divide-y-1 divide-gray/12 dark:text-white/90">
    <div v-for="item, i in tableData" :key="item.id" v-slidein="100" class="grid grid-cols-20 items-center gap-x-4 hover:bg-gray/10" py-1>
      <div pl1>
        {{ i ? i : '#' }}
      </div>
      <div>
        <LazyImage v-if="i" :key="item.id" :src="item.avatar_url" wh="10" />
        <span v-else>{{ item.avatar }}</span>
      </div>
      <div col-span-5 clamp-2>
        <a v-if="i" :href="item.html_url" target="_blank">
          <span mr-2 font-semibold text="blue-500 hover:purple-500" op85>{{ item.name }}</span>
          <span font-light text="slate-400 dark:slate-500/90"> {{ item.login }}</span>
        </a>
        <span v-else> {{ item.name }} </span>
      </div>
      <div col-span-2 :class="i ? 'text-pink-500' : ''">
        {{ formatNumber(item.followers) }}
      </div>
      <div col-span-2>
        {{ item.public_repos }}
      </div>
      <div col-span-4>
        {{ item.email }}
      </div>
      <div w-max>
        <a v-if="i" :href="item.blog" class="text-blue-500/80" target="_blank">{{ item.blog }}</a>
        <span v-else>{{ item.blog }} </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
