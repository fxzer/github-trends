import { orequest } from './octokit'
import { saveData } from './saveData'

export async function getRepos(lang: string, page: number) {
  try {
    const dt = await orequest(`GET /search/repositories`, {
      q: `stars:>2000 language:${lang}`,
      sort: 'stars',
      page,
      per_page: 100,
    })
    if (dt && dt.data && dt.data.items)
      return dt.data.items.map((repo: any) => ({ ...repo, stars: repo.stargazers_count }))
  }
  catch (error) {
    if (error instanceof Error)
      throw error.message || error
  }
}

export async function getReposData() {
  const languages = ['JavaScript', 'TypeScript', 'Vue']
  const allRepos: any = { }
  for (const lang of languages) {
    const langRepos = []
    for (let i = 1; i <= 1; i++) {
      const dt = await getRepos(lang, i)
      if (dt && dt.length)
        langRepos.push(...dt)
    }
    allRepos[lang] = langRepos
    console.log(`===> ${lang}-[${langRepos.length}条]- 仓库数据获取完成 <===`)
  }
  await saveData(allRepos, `repos.js`)
}
