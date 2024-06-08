<script setup>
import { setHtmlProperty } from '~/utils'

setHtmlProperty('--el-color-primary', '#44c089')
</script>

<template>
  <div w="lg:250 xl:300" mx-auto min-h-screen pb-10 text-sm backdrop-blur-3xl lt-lg:px-4>
    <Header />
    <div>
      <slot />
    </div>
  </div>
</template>
