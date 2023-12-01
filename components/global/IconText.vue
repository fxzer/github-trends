<script setup lang='ts'>
defineProps<{
  iconName: string
  color?: string
  text: string | number | null
  title: string
}>()
</script>

<template>
  <div v-if="text" :title="title" flex-center gap-1>
    <Icon :name="iconName" text-zinc /> <span>{{ text }}</span>
  </div>
</template>

<style scoped lang='scss'>

</style>
