<script setup lang='ts'>
defineProps(['list'])
const value = defineModel<string>()
</script>

<template>
  <div class="flex-center overflow-hidden border-1 rounded-1 bg-white text-gray-600 divide-x-1 dark:border-none">
    <div
      v-for="item in list" :key="item.value" class="h-full text-gray-600"
      :class="value === item.value ? 'bg-primary text-white' : '' "
    >
      <input :id="item.value" v-model="value" type="radio" :value="item.value" class="hidden">
      <label :for="item.value" class="h-full flex-center cursor-pointer px-4 py-1">{{ item.label }}</label>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
