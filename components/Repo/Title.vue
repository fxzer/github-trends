<script setup lang='ts'>
defineProps<{
  color: string
  owner: string
  name: string
}>()
const gh = 'https://github.com/'
</script>

<template>
  <div :style="{ color }" break-words text="lg md:2xl">
    <a :href="`${gh}${owner}`" target="_blank" hover:text-purple>{{ owner }}/</a>
    <a :href="`${gh}${owner}/${name}`" target="_blank" hover:text-purple>{{ name }}</a>
  </div>
</template>

<style scoped lang='scss'>

</style>
