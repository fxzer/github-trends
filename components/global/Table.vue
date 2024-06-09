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

const route = useRoute()
</script>

<template>
  <div class="text-gray divide-y-1 divide-gray/12">
    <div v-for="item, i in tableData" :key="i" v-slidein="40" class="group grid grid-cols-20 items-center gap-x-4 hover:bg-gray/10" py-1>
      <div pl1 op50 class="group-hover:op100">
        {{ i ? i : '#' }}
      </div>
      <div>
        <LazyImage v-if="i" :key="item.id" :src="item.avatar" wh="8" />
        <span v-else>{{ item.avatar }}</span>
      </div>
      <div col-span-4 clamp-2 :class="i ? 'text-gray-600 dark:text-white/90' : ''">
        <RepoTitle v-if="i" color="" :repo="item" class="!text-sm" />
        <span v-else> {{ item.name }} </span>
      </div>
      <div>
        <div :class="i && route.path === '/repo' ? 'text-primary op90' : ''">
          {{ formatNumber(item.stars) }}
        </div>
      </div>
      <div>{{ formatNumber(item.forks) }}</div>
      <div v-if="hasStarup">
        <div v-if="i " :class="i ? 'text-red op90' : ''">
          {{ formatNumber(item.starup) }}
        </div>
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
