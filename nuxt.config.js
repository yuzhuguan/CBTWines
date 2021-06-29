const pkg = require('./package')
const i18nConfig = require('./config/i18n')
const gaConfig = require('./config/google-analytics')
require('dotenv').config()

module.exports = {
  ssr: true,
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'author', name: 'author', content: pkg.author },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'og:type', name: 'og:type', content: this.post && this.post.type === 'blog' ? 'blog-post' : 'blog' },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
        onload: "this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Roboto',
        onload: "this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap',
        onload: "this.rel='stylesheet'"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'aos/dist/aos.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/aos', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    ['nuxt-i18n', i18nConfig],
    ['@nuxtjs/google-analytics', gaConfig],
    '@nuxtjs/dotenv',
    '@nuxtjs/cloudinary'
  ],

  /*
  ** cloudinary settings
  */
  cloudinary: {
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_APIKEY,
    apiSecret: process.env.CLOUDINARY_APISECRET,
    secure: false,
    useComponent: true
  },

  /*
  ** Nuxt.js serverMiddleware
  */
  serverMiddleware: [
    '~/api/index.js'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
