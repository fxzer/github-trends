import { orequest } from './octokit'

export async function getRateLimit() {
  const rateInfo = await orequest('GET /rate_limit')
  console.log('Github API 使用情况:', rateInfo)
}
