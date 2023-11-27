<script setup lang='ts'>
import { LANGUAGE_LIST } from '~/utils'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

const language = useVModel(props, 'modelValue', emit)
</script>

<template>
    <el-radio-group v-model="language">
      <el-radio-button v-for="item in LANGUAGE_LIST" :key="item" :label="item">
        {{ item }}
      </el-radio-button>
    </el-radio-group>
</template>

<style scoped lang='scss'>

</style>
