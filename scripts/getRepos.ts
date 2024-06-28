import process from 'node:process'
import { request } from '@octokit/request'
import { saveData } from './saveData'

export async function getRepos(lang: string, page: number) {
  const headers: { authorization?: string } = {}
  if (process.env.GITHUB_TRENDS_TOKEN)
    headers.authorization = `token ${process.env.GITHUB_TRENDS_TOKEN}`
  try {
    const dt = await request(`GET /search/repositories`, {
      headers,
      q: `stars:>2000 language:${lang}`,
      sort: 'stars',
      page,
      per_page: 100,
    })
    if (dt && dt.data && dt.data.items) {
      return dt.data.items.map(repo => ({
        ...repo,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        avatar: repo.owner.avatar_url,
        owner: repo.owner.login,
        name: repo.name,
        url: repo.html_url,
        ourl: repo.owner.html_url,
        openIssues: repo.open_issues,
        updated_at: repo.updated_at,
      }))
    }
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
    for (let i = 1; i <= 2; i++) {
      const dt = await getRepos(lang, i)
      if (dt && dt.length)
        langRepos.push(...dt)
    }
    allRepos[lang] = langRepos
    console.log(`===> ${lang}-[${langRepos.length}条]- 仓库数据获取完成 <===`)
  }
  await saveData(allRepos, `repos.js`)
}
