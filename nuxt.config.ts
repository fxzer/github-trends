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
    baseURL: '/github-trends/',
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
          href: '/logo.svg',
        },
        // 网址规范化
        { rel: 'canonical', href: 'https://www.xxx.com' },
      ],
      script: [],
    },
  },
})
