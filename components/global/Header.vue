<script setup>
import { updateTime } from '~/data/updateTime'

const route = useRoute()
function isActive(path) {
  return route.path === path ? 'text-primary' : ''
}
const routes = [
  { path: '/', text: '趋势' },
  { path: '/repo', text: '仓库' },
  { path: '/user', text: '用户' },
]
</script>

<template>
  <header flex-between-center py-4 text="center dark:white" border="b gray/40">
    <img src="/favicon.svg" alt="logo" wh="8 md:10">
    <div class="relative">
      <nav flex-between-center gap-5 font-bold md:gap-10 text="xl sm:2xl">
        <NuxtLink v-for="(item, idx) in routes" :key="idx" :to="item.path" :class="isActive(item.path)">
          {{ item.text }}
        </NuxtLink>
      </nav>
      <p absolute left-0 right-0 mx-auto whitespace-nowrap text="xs gray/80">
        最近更新： {{ updateTime }}
      </p>
    </div>

    <div flex text-xl space-x-4>
      <button class="i-material-symbols:light-mode dark:i-solar:moon-sleep-bold text-amber" @click="toggleDarkAnimate" />
      <a rel="noreferrer" href="https://github.com/fxzer/github-trends" target="_blank" title="GitHub" class="i-simple-icons:github" />
      <a rel="noreferrer" href="https://gitee.com/fxzer/github-trends" target="_blank" title="Gitee" class="i-simple-icons:gitee text-#D90713" />
    </div>
  </header>
</template>

<style>
</style>
