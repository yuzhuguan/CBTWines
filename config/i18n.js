module.exports = {
  locales: [{
    name: 'Traditional Chinese',
    code: 'hk',
    iso: 'zh-hk',
    file: 'hk.js'
  },
  {
    name: 'Simplified Chinese',
    code: 'cn',
    iso: 'zh-cn',
    file: 'cn.js'
  },
  {
    name: 'English',
    code: 'en',
    iso: 'en-hk',
    file: 'en.js'
  }
  ],
  langDir: 'lang/',
  defaultLocale: 'en',
  lazy: true,
  vuex: {
    moduleName: 'i18n',
    syncLocale: true,
    syncMessages: false,
    syncRouteParams: true
  },
  seo: true,
  baseUrl: 'https://www.cbtwines.co',
  detectBrowserLanguage: false
}
