<script setup>
import pkg from '../package.json'

const isDark = useDark()
const route = useRoute()
const { updateTime } = pkg
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
  <header class="flex-between-center border-b border-gray/40 py-4 text-center dark:text-white">
    <!-- <div class=""> -->
    <img src="/logo.svg" alt="logo" class="md:wh-10 wh-8">
    <div class="relative">
      <nav class="flex flex-between-center gap-5 text-xl font-bold md:gap-10 sm:text-2xl">
        <NuxtLink v-for="(item, idx) in routes" :key="idx" :to="item.path" :class="isActive(item.path)">
          {{ item.text }}
        </NuxtLink>
      </nav>
      <p class="absolute left-0 right-0 mx-auto whitespace-nowrap text-xs text-gray/80">
        最近更新： {{ updateTime }}
      </p>
    </div>

    <div class="flex space-x-4">
      <span class="cursor-pointer" @click="toggleDarkAnimate">
        <Icon v-show="!isDark" name="material-symbols:light-mode" color="#FCBE34" class="md:wh-6 scale-120" />
        <Icon v-show="isDark" name="solar:moon-sleep-bold" class="md:wh-6" />
      </span>
      <a rel="noreferrer" href="https://github.com/fxzer/github-trends" target="_blank" title="GitHub">
        <Icon name="simple-icons:github" class="md:wh-6" />
      </a>
      <a rel="noreferrer" href="https://gitee.com/fxzer/github-trends" target="_blank" title="Gitee">
        <Icon name="simple-icons:gitee" color="#D90713" class="md:wh-6 scale-110" />
      </a>
    </div>
    <!-- </div> -->
  </header>
</template>
