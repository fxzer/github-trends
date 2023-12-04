<script setup>
import { updateTime } from '~/data/updateTime'

const isDark = useDark()
const route = useRoute()
function isActive(path) {
  return route.path === path ? 'text-green-500' : ''
}
const routes = [
  { path: '/', text: '趋势' },
  { path: '/repo', text: '仓库' },
  { path: '/user', text: '用户' },
]
</script>

<template>
  <header flex-between-center py-4 text="center dark:white" border="b gray/40">
    <!-- <div class=""> -->
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

    <div flex space-x-4>
      <span cursor-pointer @click="toggleDarkAnimate">
        <Icon v-show="!isDark" name="material-symbols:light-mode" color="#FCBE34" md:wh-6 scale-120 />
        <Icon v-show="isDark" name="solar:moon-sleep-bold" md:wh-6 />
      </span>
      <a rel="noreferrer" href="https://github.com/fxzer/github-trends" target="_blank" title="GitHub">
        <Icon name="simple-icons:github" md:wh-6 />
      </a>
      <a rel="noreferrer" href="https://gitee.com/fxzer/github-trends" target="_blank" title="Gitee">
        <Icon name="simple-icons:gitee" color="#D90713" md:wh-6 scale-110 />
      </a>
    </div>
    <!-- </div> -->
  </header>
</template>
