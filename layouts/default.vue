<script>
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="mx-auto">
    <Header />
    <div class="flex-center">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
