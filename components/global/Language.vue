<script setup lang='ts'>
import { LANGUAGE_LIST } from '~/utils'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

const language = useVModel(props, 'modelValue', emit)
</script>

<template>
  <RadioGroup v-model="language" :list="LANGUAGE_LIST.map(n => ({ label: n, value: n }))" />
</template>

<style scoped lang='scss'>

</style>
