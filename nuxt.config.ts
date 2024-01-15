// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL: '/portfolio/',
    head: {
      title: 'YU KOGANEMARU',
      meta: [
          {name: 'description', content: 'YU KOGANEMARU|WEB developerのYUの個人サイトです。'},
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'YU KOGANEMARU' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://use.typekit.net'
        },
        { rel: 'stylesheet', href: 'https://use.typekit.net/ysq4mzr.css' }
      ],
      script: [
        {
          src: 'https://use.typekit.net/eic3tdn.js'
        }
      ]
    }
  },
  routeRules: {
    '/works/*': { ssr: true, prerender: true }
  },
  srcDir: 'src/',
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false
  },
  components: [
    {
      path: '@/components',
      pathPrefix: false
    }
  ],
  imports: {
    dirs: [
      'types/*.ts',
      'types/**/*.ts'
    ]
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
          '@import "@/assets/styles/variables.scss"; \
          @import "@/assets/styles/mixin.scss";'
        }
      }
    }
  },
})
