<script setup lang='ts'>
import { USER_RANGES, type UserRange } from '../utils'
import dataMap from '~/data/users.js'

const userRange = ref<UserRange>(USER_RANGES[0].value)
const userList = ref<any[]>([])
watch(userRange, () => {
  userList.value = dataMap[`${userRange.value}`]
}, { immediate: true })
</script>

<template>
  <div>
    <el-radio-group v-model="userRange">
      <el-radio-button v-for="item in USER_RANGES" :key="item.value" :label="item.value">
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>
    <div class="grid grid-cols-2 my-2 gap-2">
      <User v-for="(user, index) in userList" :key="index" :user="user" />
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>
