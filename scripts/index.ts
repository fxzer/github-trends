import { getTrendData } from './getTrends'
import { getReposData } from './getRepos'
import { getUsersData } from './getUsers'

await getTrendData()
await getReposData()
await getUsersData()
