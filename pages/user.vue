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
      <el-radio-group v-model="userRange" style="--el-color-primary: #44c089">
        <el-radio-button v-for="item in USER_RANGES" :key="item.value" :value="item.value">
          {{ item.label }}
        </el-radio-button>
      </el-radio-group>
      <Views v-model="view" />
    </FilterWrap>
    <Transition name="fade-top" mode="out-in">
      <div v-if="view === 'list'" grid="~ md:cols-2 xl:cols-3 gap-2">
        <User v-for="(user, index) in userList" :key="index" :user="user" :index="index" />
      </div>
      <UserChart v-else-if="view === 'chart'" :data="userList" />
    </Transition>
  </div>
</template>

<style scoped lang='scss'>
</style>
