<script setup lang='ts'>
defineProps<{
  icon: string
  text: string | number | null
  title: string
}>()
</script>

<template>
  <div v-if="text" :title="title" flex-start-center gap-1 lt-md:scale-80>
    <i :class="icon" text-gray /><span>{{ text }}</span>
  </div>
</template>

<style scoped lang='scss'>

</style>
