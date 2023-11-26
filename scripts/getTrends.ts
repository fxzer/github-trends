import url from 'node:url'
import { load } from 'cheerio'
import fetch from 'node-fetch'

export function getTrendingData(type = 'daily') {
  const apiUrl = `https://github.com/trending/javascript?since=${type}`
  return fetch(apiUrl)
    .then(res => res.arrayBuffer())
    .then((buf) => {
      const resultData = []
      const enc = new TextDecoder('utf-8')
      const html = enc.decode(buf)
      const $ = load(html)
      $('.Box-row').each((idx, item) => {
        const fullName = $(item).find('h2 a').text().replace(/(\n|\s)/g, '')
        const href = $(item).find('h2 a').attr('href')?.replace(/(\n|\s)/g, '')
        const language = $(item).find('span[itemprop=programmingLanguage]').text().replace(/(\n|\s)/g, '')
        const languageColor = $(item).find('span.repo-language-color')
        const todayStar = $(item).find('span.float-sm-right').text().replace(/(\n|,)/g, '').trim()
        const description = $(item).find('p.color-fg-muted').text().replace(/(\n)/g, '').trim()
        if (!fullName)
          throw new Error(`${apiUrl}: fullName is null`)

        if (!href)
          throw new Error(`${apiUrl}\n\n${fullName}: href is null`)

        if (!todayStar)
          throw new Error(`${apiUrl}\n\n${fullName}: todayStar is null`)

        let color = ''
        if (language && languageColor && languageColor.css)
          color = languageColor.css('background-color')

        let stargazersCount = ''
        let node = $(item).find('svg[aria-label="star"].octicon.octicon-star')
        if (node && node[0] && node[0].next)
          stargazersCount = node[0].next?.data?.replace(/(\n|\s|,)/g, '') || ''

        let forked = '-'
        node = $(item).find('svg[aria-label="fork"].octicon.octicon-repo-forked')
        if (node)
          forked = node[0].next?.data?.replace(/(\n|\s|,)/g, '') || ''

        resultData.push({ full_name: fullName, language, color, description, forked, stargazers_count: Number.parseInt(stargazersCount, 10), todayStar, html_url: url.URL(apiUrl, href), rank: idx + 1 })
      })
      return resultData
    })
}
