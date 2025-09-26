import { getReposData } from './getRepos'
import { getTrendData } from './getTrends'
import { getUsersData } from './getUsers'
import { getRateLimit } from './rateLimit'
import { saveUpdateTime } from './updateTime'

await saveUpdateTime()
await getRateLimit()
await getReposData()
await getUsersData()
await getTrendData()
console.log('===> 数据更新完成 <===')
