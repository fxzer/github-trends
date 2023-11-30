// eslint-disable-next-line node/prefer-global/process
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
    '@element-plus/nuxt',
  ],
  elementPlus: {
  },
  postcss: {
    plugins: {
      autoprefixer: {}, // 自动添加前缀
      cssnano: {},
    },
  },
  css: ['assets/styles/main.scss'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  app: {
    baseURL: isVercel ? '/' : '/github-trends/', /* 根据 */
    head: {
      title: 'github-trends',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'keywords',
          content: 'github-trends',
        },
        {
          name: 'description',
          content:
            'github-trends',
        },
        {
          charset: 'utf-8',
        },
        { name: 'theme-color', content: '#FCF2E2' }, // PWA移动浏览器顶部主题颜色
      ],
      link: [
        {
          hid: 'icon',
          rel: 'icon',
          href: '/logo.ico',
        },
        {
          hid: 'icon',
          rel: 'icon',
          href: '/logo.svg',
        },
        // 网址规范化
        { rel: 'canonical', href: 'https://github-trends-neon.vercel.app' },
      ],
      script: [],
    },
  },
})
