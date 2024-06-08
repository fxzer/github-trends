<script setup lang='ts'>
const props = defineProps<{
  hasStarup?: boolean
}>()
const data = inject('data') as any

const tableHead = computed(() => ({
  avatar: 'Avatar',
  name: 'Name',
  stars: 'Stars',
  forks: 'Forks',
  [props.hasStarup ? 'starup' : 'size']: props.hasStarup ? 'Starup' : 'Size',
  description: 'Description',

}))
const tableData = computed(() => {
  return [tableHead.value, ...data.value]
})
</script>

<template>
  <div class="divide-y-1 divide-gray/12 dark:text-white/90">
    <div v-for="item, i in tableData" :key="i" v-slidein="100" class="grid grid-cols-20 items-center gap-x-4 hover:bg-gray/10" py-2>
      <div pl1>
        {{ i ? i : '#' }}
      </div>
      <div>
        <LazyImage v-if="i" :key="item.id" :src="item.avatar" wh="10" />
        <span v-else>{{ item.avatar }}</span>
      </div>
      <div col-span-4 clamp-2>
        <RepoTitle v-if="i" color="" :owner="item.owner" :name="item.name" class="!text-sm" />
        <span v-else> {{ item.name }} </span>
      </div>
      <div>{{ item.stars }}</div>
      <div>{{ item.forks }}</div>
      <div v-if="hasStarup" text-red>
        {{ item.starup }}
      </div>
      <div v-else class="col-span-2">
        {{ i ? formatSize(item.size) : item.size }}
      </div>
      <div :class="hasStarup ? 'col-span-11' : 'col-span-10'" clamp-2 :title="item.description">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
