<script setup lang='ts'>
defineProps(['src'])
</script>

<template>
  <img v-lazy="src" rounded-full wh="13 md:15">
</template>

<style scoped lang='scss'>

</style>
