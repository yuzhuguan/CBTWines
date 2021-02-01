const pkg = require('./package')
const i18nConfig = require('./config/i18n')
const gaConfig = require('./config/google-analytics')
require('dotenv').config()

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'CBT Wines Company Limited',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'author', name: 'author', content: pkg.author }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
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
    '~/assets/style/app.styl',
    'aos/dist/aos.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/aos', ssr: false}
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
    extend(config, ctx) {
    }
  }
}
