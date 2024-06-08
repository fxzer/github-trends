<script setup lang='ts'>
defineProps<{
  index: number
  repo: any
}>()
const color = inject('color') as string
</script>

<template>
  <div v-slidein="100" relative flex overflow-hidden rounded-md p="x-2 y-1" gap="2 md:4" border="~ gray/40 hover:primary">
    <OrderNum :index="index" />
    <div flex-center>
      <LazyImage :src="repo.avatar" wh="13 md:15" />
    </div>
    <div min-w-0 flex-1>
      <div>
        <RepoTitle :color="color" :owner="repo.owner" :name="repo.name" op85 />
        <p my-1 text="xs zinc" clamp="3 md:2" min-h-4>
          {{ repo.description }}
        </p>
      </div>
      <div flex transform-origin-lc gap-6 text-zinc lt-md:scale-80>
        <IconText title="star" icon-name="material-symbols:kid-star-outline-sharp" :text="repo.stars" />
        <IconText title="fork" icon-name="charm:git-fork" :text="repo.forks" />
        <slot :repo="repo" name="icons" />
      </div>
    </div>
    <slot name="trendsvg" :repo="repo" />
  </div>
</template>

<style scoped lang='scss'>
</style>
