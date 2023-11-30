import process from 'node:process'
import { request } from '@octokit/request'
import { saveData } from './saveData'

const REPO_COUNT = 100 /** 每个语言获取的总仓库数 */
export async function getRepos(lang: string, page: number) {
  const headers: { authorization?: string } = {}
  if (process.env.GITHUB_TRENDS_TOKEN)
    headers.authorization = `token ${process.env.GITHUB_TRENDS_TOKEN}`
  try {
    const dt = await request(`GET /search/repositories`, {
      ...{ headers },
      q: `stars:>2000 language:${lang}`,
      sort: 'stars',
      page,
      per_page: 10,
    })
    if (dt && dt.data && dt.data.items)
      return dt.data.items.map(repo => ({ ...repo, stars: repo.stargazers_count }))
  }
  catch (error) {
    if (error instanceof Error)
      throw error.message || error
  }
}

/** 获取 1000条 */
export async function getReposData() {
  const languages = ['JavaScript', 'TypeScript', 'Vue']
  const allRepos: any = { }
  for (const lang of languages) {
    const langRepos = []
    for (let i = 1; i <= REPO_COUNT / 10; i++) {
      const dt = await getRepos(lang, i)
      if (dt && dt.length)
        langRepos.push(...dt)
    }
    allRepos[lang] = langRepos
  }
  await saveData(allRepos, `repos.js`)
}
