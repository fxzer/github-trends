<script setup>
const isDark = useDark()
const route = useRoute()
function isActive(path) {
  return route.path === path ? 'text-green-500' : ''
}
const routes = [
  { path: '/', text: '趋势' },
  { path: '/repo', text: '仓库' },
  { path: '/user', text: '开发者' },
]
</script>

<template>
  <nav class="flex-between-center pb-4 space-x-4 dark:text-white">
    <div class="text-2xl font-bold space-x-4">
      <NuxtLink v-for="(item, idx) in routes" :key="idx" :to="item.path" :class="isActive(item.path)">
        {{ item.text }}
      </NuxtLink>
    </div>
    <div class="flex space-x-3">
      <span class="cursor-pointer" @click="toggleDarkAnimate">
        <Icon v-show="!isDark" name="material-symbols:light-mode" color="#FCBE34" />
        <Icon v-show="isDark" name="solar:moon-sleep-bold" />
      </span>
      <a rel="noreferrer" href="https://github.com/fxzer/github-trends" target="_blank" title="GitHub">
        <Icon name="simple-icons:github" />
      </a>
      <a rel="noreferrer" href="https://gitee.com/fxzer/github-trends" target="_blank" title="Gitee">
        <Icon name="simple-icons:gitee" color="#D90713" />
      </a>
    </div>
  </nav>
</template>
