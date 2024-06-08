import { saveUpdateTime } from './updateTime'
import { getRateLimit } from './rateLimit'
import { getReposData } from './getRepos'
import { getUsersData } from './getUsers'
import { getTrendData } from './getTrends'

await saveUpdateTime()
await getRateLimit()
await getReposData()
await getUsersData()
await getTrendData()
console.log('===> 数据更新完成 <===')
