export const metaTag = {
  head () {
    const hreflang = this.getHrefLink()
    const og = this.getOg()
    const htmlAttrs = {
      en: 'en-hk',
      hk: 'zh-hk',
      cn: 'zh-cn'
    }
    return {
      htmlAttrs: {
        lang: htmlAttrs[this.$i18n.locale]
      },
      title: this.getMeta('title'),
      meta: [
        { name: 'IE=edge', 'http-equiv': 'X-UA-Compatible' },
        { 'http-equiv': 'Content-Language', content: htmlAttrs[this.$i18n.locale] },
        { hid: 'description', name: 'description', content: this.getMeta('description') },
        { hid: 'keywords', name: 'keywords', content: this.getMeta('keywords') },
        ...og
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', content: `http://${this.$t('meta.base.url')}/${this.getMeta('slug')}` },
        ...hreflang
      ]
    }
  },
  methods: {
    getMeta (field) {
      return this.identifier ? this.$t(`meta.${this.identifier}.${field}`) : this.$t(`meta.home.${field}`)
    },
    getHrefLink () {
      const href = [{ rel: 'alternate', href: `http://${this.$t('meta.base.url')}/${this.getMeta('slug')}`, hreflang: 'x-default' }]
      const locales = [
        {
          href: 'en',
          hreflang: 'en-US'
        },
        {
          href: 'hk',
          hreflang: 'zh-hk'
        },
        {
          href: 'cn',
          hreflang: 'zh-CN'
        }
      ]
      for (const locale of locales) {
        if (this.$i18n.locale !== locale.href) {
          const hrefUrl = locale.href === 'en'
            ? `http://${this.$t('meta.base.url')}/${this.getMeta('slug')}`
            : `http://${this.$t('meta.base.url')}/${locale.href}/${this.getMeta('slug')}`
          href.push({
            rel: 'alternate',
            href: hrefUrl,
            hreflang: locale.hreflang
          })
        }
      }
      return href
    },
    getOg () {
      return [
        { hid: 'og:site_name', name: 'og:site_name', content: 'CBTWines' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:title', name: 'og:title', content: this.getMeta('title') },
        { hid: 'og:description', name: 'og:description', content: this.getMeta('description') },
        { hid: 'og:keywords', name: 'og:keywords', content: this.getMeta('keywords') },
        { hid: 'og:url', name: 'og:url', content: `http://${this.$t('meta.base.url')}/${this.getMeta('slug')}` },
        { hid: 'og:img', name: 'og:img', content: this.$t('meta.base.image') }
      ]
    }
  }
}
