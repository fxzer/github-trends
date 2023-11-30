<script setup lang='ts'>
import { USER_RANGES, type UserRange } from '../utils'
import dataMap from '~/data/users.js'

const userRange = ref<UserRange>(USER_RANGES[0].value)
const userList = ref<any[]>([])
watch(userRange, () => {
  userList.value = dataMap[`${userRange.value}`]
}, { immediate: true })
const view = ref<'list' | 'chart'>('list')
</script>

<template>
  <div>
    <FilterWrap>
      <el-radio-group v-model="userRange" size="small">
        <el-radio-button v-for="item in USER_RANGES" :key="item.value" :label="item.value">
          {{ item.label }}
        </el-radio-button>
      </el-radio-group>
      <Views v-model="view" />
    </FilterWrap>
    <div v-if="view === 'list'" class="grid my-2 gap-2 md:grid-cols-2 xl:grid-cols-3">
      <User v-for="(user, index) in userList" :key="index" :user="user" />
    </div>
    <UserChart v-else-if="view === 'chart'" :data="userList" />
  </div>
</template>

<style scoped lang='scss'>
</style>
