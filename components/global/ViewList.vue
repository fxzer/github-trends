<script setup lang='ts'>
const data = inject('data')
const { onMouseEnter } = useMouseEnter()
</script>

<template>
  <div grid="~ lg:cols-2 gap-2" class="relative">
    <div class="pointer absolute left-0 top-0 border-2 op0 transition-all duration-300" />
    <RepoItem v-for="(item, index) in data" :key="index" :index="index" :repo="item" @mouseenter="onMouseEnter">
      <template #icons="{ repo }">
        <slot name="icons" :repo="repo" />
      </template>
    </RepoItem>
  </div>
</template>

<style scoped lang='scss'>

</style>
