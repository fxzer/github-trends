<script setup lang='ts'>
defineProps<{
  color: string
  repo: Repo
}>()
</script>

<template>
  <div :style="{ color }" break-words text="lg md:2xl">
    <a :href="repo.ourl" target="_blank" hover:text-purple>{{ repo.owner }}/</a>
    <a :href="repo.url" target="_blank" hover:text-purple>{{ repo.name }}</a>
  </div>
</template>

<style scoped lang='scss'>

</style>
