<script setup>
const isDark = useDark()
</script>

<template>
  <nav class="flex-center pb-4 space-x-4 dark:text-white">
    <span class="cursor-pointer" @click="toggleDarkAnimate">
      <Icon v-show="!isDark" name="material-symbols:light-mode" color="#FCBE34" />
      <Icon v-show="isDark" name="solar:moon-sleep-bold" />
    </span>

    <a
      rel="noreferrer"
      href="https://github.com/fxzer/github-trends"
      target="_blank"
      title="GitHub"
    >
      <Icon name="simple-icons:github" />
    </a>

    <a
      rel="noreferrer"
      href="https://gitee.com/fxzer/github-trends"
      target="_blank"
      title="Gitee"
    >
      <Icon name="simple-icons:gitee" color="#D90713" />
    </a>
  </nav>
</template>
