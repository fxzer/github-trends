<script setup lang='ts'>
const props = defineProps<{
  modelValue: string
  showStarup?: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const viewsMap = {
  table: 'i-lucide:sliders-horizontal',
  list: 'i-lucide:table',
  chart: 'i-lucide:bar-chart-horizontal',
}
const view = useVModel(props, 'modelValue', emit)
const viewMapAll = computed(() => props.showStarup ? { ...viewsMap, 'starup-chart': 'i-lucide:line-chart' } : viewsMap)
</script>

<template>
  <div v-if="modelValue" flex cursor-pointer text-lg space-x-2 dark:text-gray-300>
    <button
      v-for="(value, key) in viewMapAll" :key="key"
      :class="[
        value,
        view === key ? 'text-primary' : '',
        key === 'table' ? 'lt-md:hidden' : '',
      ]"
      @click="view = key"
    />
  </div>
</template>
