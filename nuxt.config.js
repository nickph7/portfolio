
export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Falaeco Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/frb6tpn.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/swiper/css/swiper.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  * { color: '#fff' }
  */
  loading: '~/components/Loading.vue',
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/falaeco_webfont.css',
    '~/assets/css/animation.css',
    '~/assets/css/mystyle.css',
    '~/assets/css/typography.css',
    '~/assets/css/plyr.css',
    '~/assets/css/swiper.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/vimeo-player', mode: 'client' },
    { src: '~/plugins/vue-plyr' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/projects',
        redirect: '/projects/stupefiant'
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
