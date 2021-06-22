module.exports = {
  locales: [{
    name: 'Traditional Chinese',
    code: 'hk',
    iso: 'zh_HK',
    file: 'hk.js'
  },
  {
    name: 'Simplified Chinese',
    code: 'cn',
    iso: 'zh_CN',
    file: 'cn.js'
  },
  {
    name: 'English',
    code: 'en',
    iso: 'en-US',
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
  seo: true
}
