import axios from 'axios'
import { load } from 'cheerio'
import type { DateRange, Language } from '../utils'
import { DATE_RANGE_LIST, LANGUAGE_LIST, strToNumber } from '../utils'
import { saveData } from './saveData'

export async function getTrendData() {
  const allTrends: any = {}
  for (const lang of LANGUAGE_LIST) {
    for (const range of DATE_RANGE_LIST) {
      const html = await getTrendsHtml(lang, range.value)
      const trends = await parseTrendsHtml(html.data)
      allTrends[`${lang}-${range.value}`] = trends
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
    const avatar = $(el).find('.color-fg-muted a.d-inline-block img.avatar-user')[0]?.attribs?.src || ''
    const path = $(el).find('.h3 a').attr('href')
    const ourl = path ? `https://github.com/${owner}` : ''
    const url = path ? `https://github.com${path}` : ''
    const description = $(el).find('p.col-9.color-fg-muted.my-1.pr-4').text().trim()
    const language = $(el).find('[itemprop=programmingLanguage]').text().trim() || ''
    const stars = strToNumber($(el).find('a[href*="stargazers"]').text().trim())
    const forks = strToNumber($(el).find('a[href*="forks"]').text().trim())
    const starup = strToNumber($(el).find('.float-sm-right').text().trim().split(' ')[0])
    trends.push({
      title,
      owner,
      name,
      avatar,
      path,
      url,
      ourl,
      description,
      language,
      stars,
      forks,
      starup,
    })
  })
  return trends
}
