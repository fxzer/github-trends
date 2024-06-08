<script setup lang='ts'>
defineProps(['src'])
</script>

<template>
  <img v-lazy="src" border-1 rounded-full class="border-gray/40">
</template>

<style scoped lang='scss'>

</style>
