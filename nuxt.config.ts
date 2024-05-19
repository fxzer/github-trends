import process from 'node:process'

const isVercel = process.argv.includes('--vercel')
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
  },
  devServer: {
    port: 8888,
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/sitemap',
  ],
  postcss: {
    plugins: {
      autoprefixer: {}, // 自动添加前缀
      cssnano: {},
    },
  },
  css: ['assets/styles/main.scss'],
  site: {
    url: 'https://fxzer.github.io',
  },
  app: {
    baseURL: isVercel ? '/' : '/github-trends/', /* 根据环境决定路由前缀 */
    pageTransition: {
      name: 'fade-slide',
      mode: 'out-in',
    },
    head: {
      title: 'Github Trends',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'keywords',
          content: 'github、trending、chart 、github-trends',
        },
        {
          name: 'description',
          content:
            'Github 趋势一览',
        },
        {
          charset: 'utf-8',
        },
      ],
      link: [
        {
          hid: 'icon',
          rel: 'icon',
          href: '/github-trends/favicon.ico',
        },
        {
          hid: 'icon',
          rel: 'icon',
          href: '/github-trends/favicon.svg',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/github-trends/favicon.svg',
        },
        // 网址规范化
        { rel: 'canonical', href: 'https://github-trends-neon.vercel.app' },
        { rel: 'canonical', href: 'https://fxzer.github.io/github-trends' },
        { rel: 'canonical', href: 'https://fxzer.gitee.io/github-trends' },
      ],
      script: [],
    },
  },
})
