import axios from 'axios'
import { load } from 'cheerio'
import type { DateRange, Language } from '../utils'
import { DATE_RANGE_LIST, LANGUAGE_LIST } from '../utils'
import { saveData } from './saveData'

export async function getTrendData() {
  const allTrends: any = {}
  for (const lang of LANGUAGE_LIST) {
    for (const range of DATE_RANGE_LIST) {
      const html = await getTrendsHtml(lang, range.value)
      const trends = await parseTrendsHtml(html.data)
      allTrends[`${lang}-${range.value}`] = trends
      console.log(`===> ${lang}-${range}-[${trends.length}条]- 项目数据获取完成 <===`)
    }
  }
  await saveData(allTrends, `trending.js`)
}

async function getTrendsHtml(language: Language, dateRange: DateRange) {
  const apiUrl = `https://github.com/trending/${language}?since=${dateRange}`
  return axios.get(apiUrl)
}

function parseTrendsHtml(html: string) {
  const trends: any = []
  const $ = load(html)
  $('.Box article.Box-row').each((i, el) => {
    const title = $(el).find('.h3 a').text().trim()
    const owner = $(el).find('.h3.lh-condensed a .text-normal').text().split('/')[0].trim()
    const name = $(el).find('.h3.lh-condensed a').text().split('/')[1].trim()
    const path = $(el).find('.h3 a').attr('href')
    const link = path ? `https://github.com${path}` : ''
    const description = $(el).find('p.col-9.color-fg-muted.my-1.pr-4').text().trim()
    const language = $(el).find('[itemprop=programmingLanguage]').text().trim() || ''
    const stars = $(el).find('a[href*="stargazers"]').text().trim()
    const forks = $(el).find('a[href*="forks"]').text().trim()
    const starup = $(el).find('.float-sm-right').text().trim().split(' ')[0]
    trends.push({
      title,
      owner,
      name,
      path,
      link,
      description,
      language,
      stars,
      forks,
      starup,
    })
  })
  return trends
}
