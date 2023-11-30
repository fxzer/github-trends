<script setup>
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
  <nav class="relative flex-between-center border-b border-gray/25 py-4 dark:text-white">
    <img src="/logo.svg" alt="logo" class="md:wh-10 wh-8">
    <div class="text-xl font-bold space-x-4 sm:text-2xl sm:space-x-6">
      <NuxtLink v-for="(item, idx) in routes" :key="idx" :to="item.path" :class="isActive(item.path)">
        {{ item.text }}
      </NuxtLink>
    </div>
    <div class="flex space-x-4">
      <span class="cursor-pointer" @click="toggleDarkAnimate">
        <Icon v-show="!isDark" name="material-symbols:light-mode" color="#FCBE34" size="26" />
        <Icon v-show="isDark" name="solar:moon-sleep-bold" size="26" />
      </span>
      <a rel="noreferrer" href="https://github.com/fxzer/github-trends" target="_blank" title="GitHub">
        <Icon name="simple-icons:github" size="24" />
      </a>
      <a rel="noreferrer" href="https://gitee.com/fxzer/github-trends" target="_blank" title="Gitee">
        <Icon name="simple-icons:gitee" color="#D90713" size="26" />
      </a>
    </div>
  </nav>
</template>
