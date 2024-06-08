<script setup lang='ts'>
const props = defineProps<{
  data: any[]
}>()

const tableHead = [
  {
    index: '#',
    avatar: 'Avatar',
    name: 'Name',
    starup: 'Starup',
    stars: 'Stars',
    forks: 'Forks',
    description: 'Description',
  },
]
const tableData = computed(() => {
  return [...tableHead, ...props.data]
})
</script>

<template>
  <div class="divide-y-1 divide-gray/12 dark:text-white/90">
    <div v-for="item, i in tableData" :key="i" v-slidein="100" class="grid grid-cols-20 items-center gap-x-4 hover:bg-gray/10" py-2>
      <div pl1>
        {{ i }}
      </div>
      <div>
        <LazyImage v-if="i" :src="item.avatar" wh="10" />
        <span v-else>{{ item.avatar }}</span>
      </div>
      <div col-span-4 clamp-2>
        <RepoTitle v-if="i" color="" :owner="item.owner" :name="item.name" class="!text-sm" />
        <span v-else> {{ item.name }} </span>
      </div>
      <div text-red>
        {{ item.starup }}
      </div>
      <div>{{ item.stars }}</div>
      <div>{{ item.forks }}</div>
      <div col-span-11 clamp-2 :title="item.description">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
