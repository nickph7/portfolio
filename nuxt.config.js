
export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Falaeco Portfolio',
    titleTemplate: '%s | Falaeco Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Nicolas Prud'homme's Portfolio Website" },
      { hid: 'author', name: 'author', content: "Nicolas Prud'homme" },
      { property: 'og:image', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/frb6tpn.css' }
      // TEST { rel: 'stylesheet', href: 'https://unpkg.com/swiper@5.4.5/css/swiper.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  * { color: '#fff' }
  */
  loading: '~/components/Loading.vue',
  /*
  ** Global CSS
  ** TODO: Remove global CSS for plugins
  */
  css: [
    '~/assets/css/falaeco_webfont.css',
    '~/assets/css/animation.css',
    '~/assets/css/plyr.css'
    // '~/assets/css/swiper.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/vimeo-player', mode: 'client' },
    { src: '~/plugins/vue-plyr' },
    { src: '~/plugins/vue-lazyload', mode: 'client' }
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
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 90
    }
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
        redirect: '/projects/fluid-simulation'
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
