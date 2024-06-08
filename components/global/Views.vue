<script setup lang='ts'>
const props = defineProps<{
  modelValue: string
  showStarup?: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const viewsMap = {
  list: 'lucide:table',
  table: 'lucide:sliders-horizontal',
  chart: 'lucide:bar-chart-horizontal',
}
const view = useVModel(props, 'modelValue', emit)
const viewMapAll = computed(() => props.showStarup ? { ...viewsMap, 'starup-chart': 'lucide:line-chart' } : viewsMap)
</script>

<template>
  <div flex cursor-pointer space-x-2 dark:text-zinc-300>
    <template v-for="(value, key) in viewMapAll" :key="key">
      <Icon
        :name="value" scale-125 :class=" {
          'text-primary': view === key,
          'lt-md:hidden': key === 'table',
        } " @click="view = key"
      />
    </template>
  </div>
</template>
