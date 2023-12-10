<script setup lang='ts'>
defineProps<{
  index: number
}>()
</script>

<template>
  <div flex="center shrink-0" absolute right-2 top-2>
    <div w-6>
      <img v-if="index === 0" src="/rank/1.svg" wh-full alt="1">
      <img v-if="index === 1" src="/rank/2.svg" wh-full alt="2">
      <img v-if="index === 2" src="/rank/3.svg" wh-full alt="3">
    </div>
    <span v-if="index > 2" class="text-slate/40" text-lg font-bold>{{ index + 1 }}</span>
  </div>
</template>

<style scoped lang='scss'>
</style>
