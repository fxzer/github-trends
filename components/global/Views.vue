<script setup lang='ts'>
const props = defineProps<{
  modelValue: string
  showStarup?: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const viewsMap = {
  list: 'material-symbols-light:lists',
  chart: 'lucide:bar-chart-horizontal',
}
const view = useVModel(props, 'modelValue', emit)
const viewMapAll = computed(() => props.showStarup ? { ...viewsMap, 'starup-chart': 'mdi:chart-line' } : viewsMap)
</script>

<template>
  <div flex cursor-pointer space-x-2 dark:text-zinc-300>
    <template v-for="(value, key) in viewMapAll" :key="key">
      <Icon :name="value" scale-122 :class="view === key ? 'text-lime-500' : ''" @click="view = key" />
    </template>
  </div>
</template>
