<script setup lang='ts'>
defineProps<{
  index: number
}>()
</script>

<template>
  <div overflow-hidden flex="center shrink-0" w="10 sm:15 lg:20">
    <img v-if="index === 0" src="/rank/1.svg" alt="1" wh-full>
    <img v-if="index === 1" src="/rank/2.svg" alt="2" wh-full>
    <img v-if="index === 2" src="/rank/3.svg" alt="3" wh-full>
    <span v-if="index > 2" class="gradient-text" font-bold text="xl md:3xl">{{ index + 1 }}</span>
  </div>
</template>

<style scoped lang='scss'>

</style>
