<script setup lang='ts'>
const props = defineProps<{
  modelValue: string
  showStarup?: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const view = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div class="flex cursor-pointer space-x-2 dark:text-zinc-300">
    <Icon name="material-symbols-light:lists" class="scale-122" :class="view === 'list' ? 'text-lime-500' : ''" @click="view = 'list'" />
    <Icon name="lucide:bar-chart-horizontal" :class="view === 'chart' ? 'text-lime-500' : ''" @click="view = 'chart'" />
    <Icon v-if="showStarup" name="mdi:chart-line" :class="view === 'starup-chart' ? 'text-lime-500' : ''" @click="view = 'starup-chart'" />
  </div>
</template>
