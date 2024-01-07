// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  image: {
    dir: 'assets/images'
  },
  ssr: false,
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
