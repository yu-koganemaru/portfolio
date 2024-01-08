// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
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
  modules: [
    '@nuxt/image'
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
  app: {
    baseURL: '/portfolio/',
    head: {
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
  }
})
