<script setup lang='ts'>
import dataMap from '~/data/users.js'

const { onMouseEnter } = useMouseEnter()

const { userRange, view } = useMemoryRoute()
const userList = computed(() => dataMap[`${userRange.value}`])
provide('data', userList)
</script>

<template>
  <div>
    <FilterWrap>
      <RadioGroup v-model="userRange" :list="USER_RANGES" />
      <Views v-model="view" />
    </FilterWrap>
    <Transition name="fade-top" mode="out-in">
      <div v-if="view === 'list'" grid="~ md:cols-2 xl:cols-3 gap-2" class="relative">
        <div class="pointer absolute left-0 top-0 border-2 op0 transition-all duration-300" />
        <User v-for="(user, index) in userList" :key="index" :user="user" :index="index" @mouseenter="onMouseEnter" />
      </div>
      <UserChart v-else-if="view === 'chart'" :data="userList" />
      <UserTable v-else-if="view === 'table'" />
    </Transition>
  </div>
</template>

<style scoped lang='scss'>
</style>
