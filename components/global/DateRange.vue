<script setup lang='ts'>
import { DATE_RANGE_LIST } from '~/utils'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

const range = useVModel(props, 'modelValue', emit)
</script>

<template>
   <RadioGroup v-model="range" :list="DATE_RANGE_LIST" />
</template>

<style scoped lang='scss'>

</style>
