<script setup lang='ts'>
defineProps<{
  index: number
}>()
</script>

<template>
  <div overflow-hidden flex="center shrink-0" w="10 sm:15 lg:20">
    <img v-if="index === 0" src="/rank/1.svg" wh-full alt="1">
    <img v-if="index === 1" src="/rank/2.svg" wh-full alt="2">
    <img v-if="index === 2" src="/rank/3.svg" wh-full alt="3">
    <span v-if="index > 2" class="text-slate" font-bold text="xl md:3xl">{{ index + 1 }}</span>
  </div>
</template>

<style scoped lang='scss'>
</style>
