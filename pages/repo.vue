<script setup lang='ts'>
const { view, language, color } = useMemoryRoute()

const repoList = ref([])

const pager = ref({
  endCursor: '',
  hasNextPage: false,
})
const GQL = computed(() => `query {
  search(query: "stars:>1000 language:${language.value}", type: REPOSITORY, first: 20, after: "${pager.value.endCursor}") {
    repositoryCount
    edges {
      node {
        ... on Repository {
          id
          name
          url
          createdAt
          homepageUrl
          nameWithOwner
          stargazerCount
          forkCount
          diskUsage
          issues(states: OPEN) {
            totalCount
          }
          owner {
            id
            login
            url
            avatarUrl
          }
          stargazerCount
          primaryLanguage {
            name
          }
          description
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}`)

const loading = ref(false)
async function query() {
  const accessToken = useRuntimeConfig().public.VITE_GITHUB_ACCESS_TOKEN
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36',
    'Accept': 'application/json',
    'Authorization': `bearer ${accessToken}`,
  }

  const graphqlApi = 'https://api.github.com/graphql'

  try {
    const response = await fetch(graphqlApi, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: GQL.value,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const { data } = await response.json()
    pager.value = data.search.pageInfo
    return data.search.edges.map((item: any) => {
      return {
        ...item.node,
        avatar: item.node.owner.avatarUrl,
        forks: item.node.forkCount,
        stars: item.node.stargazerCount,
        owner: item.node.owner.login,
        name: item.node.name,
        size: item.node.diskUsage,
        full_name: item.node.nameWithOwner,
      }
    })
  }
  catch (error) {
    console.error('Error fetching data:', error)
  }

  return []
}

const isVisible = ref(false)
watch(language, async () => {
  loading.value = true
  repoList.value = await query()
  loading.value = false
}, { immediate: true })

watch(isVisible, async (val) => {
  if (!val || loading.value || !pager.value.hasNextPage)
    return
  repoList.value = repoList.value.concat(await query())
})

provide('data', repoList)
provide('color', color)

const loadMoreRef = ref<HTMLElement | null>(null)
useIntersectionObserver(loadMoreRef, async ([{ isIntersecting }]) => {
  isVisible.value = isIntersecting
})
</script>

<template>
  <div>
    <FilterWrap>
      <Language v-model="language" />
      <Views v-model="view" />
    </FilterWrap>

    <Transition v-show="!loading" name="fade-top" mode="out-in">
      <ViewList v-if="view === 'list'">
        <template #icons="{ repo }">
          <IconText title="size" icon-name="fluent:table-resize-column-24-regular" :text="formatSize(repo.size)" />
        </template>
      </ViewList>
      <Table v-else-if="view === 'table'" />
      <RepoChart v-else-if="view === 'chart' && repoList.length" />
    </Transition>
    <div v-show="loading" flex-center class="h-[calc(100vh-150px)]">
      <Icon name="svg-spinners:6-dots-scale" wh-8 class="text-gray" />
    </div>
    <div v-if="!view.includes('chart')" ref="loadMoreRef" text-center>
      <Icon name="svg-spinners:3-dots-scale" wh-8 class="text-gray" />
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
