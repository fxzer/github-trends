<script setup lang='ts'>
import { DATE_RANGE_LIST } from '~/utils'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

const range = useVModel(props, 'modelValue', emit)
</script>

<template>
  <el-radio-group v-model="range">
    <el-radio-button v-for="item in DATE_RANGE_LIST" :key="item.value" :label="item.value">
      {{ item.label }}
    </el-radio-button>
  </el-radio-group>
</template>

<style scoped lang='scss'>

</style>
