import { saveUpdateTime } from './updateTime'
import { getTrendData } from './getTrends'
import { getReposData } from './getRepos'
import { getUsersData } from './getUsers'

await saveUpdateTime()
await getTrendData()
await getReposData()
await getUsersData()
