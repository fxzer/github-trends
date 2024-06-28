<script setup lang='ts'>
defineProps<{
  iconName: string
  color?: string
  text: string | number | null
  title: string
}>()
</script>

<template>
  <div v-if="text" :title="title" flex-start-center gap-1 lt-md:scale-80>
    <Icon :name="iconName" text-gray /> <span>{{ text }}</span>
  </div>
</template>

<style scoped lang='scss'>

</style>
