import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a441dadc = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages_about-us_index" */))
const _92292ce6 = () => interopDefault(import('..\\pages\\backstage\\index.vue' /* webpackChunkName: "pages_backstage_index" */))
const _466cf565 = () => interopDefault(import('..\\pages\\cn\\index.vue' /* webpackChunkName: "pages_cn_index" */))
const _7f505c65 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages_contact-us_index" */))
const _5031b466 = () => interopDefault(import('..\\pages\\hk\\index.vue' /* webpackChunkName: "pages_hk_index" */))
const _16695b4a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _2591a8ae = () => interopDefault(import('..\\pages\\new-arrivals\\index.vue' /* webpackChunkName: "pages_new-arrivals_index" */))
const _262a47a5 = () => interopDefault(import('..\\pages\\special-offers\\index.vue' /* webpackChunkName: "pages_special-offers_index" */))
const _cf7582b8 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _c6f718ae = () => interopDefault(import('..\\pages\\winelist\\index.vue' /* webpackChunkName: "pages_winelist_index" */))
const _60208ef2 = () => interopDefault(import('..\\pages\\cn\\about-us\\index.vue' /* webpackChunkName: "pages_cn_about-us_index" */))
const _5fcf591a = () => interopDefault(import('..\\pages\\cn\\contact-us\\index.vue' /* webpackChunkName: "pages_cn_contact-us_index" */))
const _ac2c61c4 = () => interopDefault(import('..\\pages\\cn\\new-arrivals\\index.vue' /* webpackChunkName: "pages_cn_new-arrivals_index" */))
const _fe7c3c4c = () => interopDefault(import('..\\pages\\cn\\special-offers\\index.vue' /* webpackChunkName: "pages_cn_special-offers_index" */))
const _82d5ccc4 = () => interopDefault(import('..\\pages\\cn\\winelist\\index.vue' /* webpackChunkName: "pages_cn_winelist_index" */))
const _a152f222 = () => interopDefault(import('..\\pages\\hk\\about-us\\index.vue' /* webpackChunkName: "pages_hk_about-us_index" */))
const _00bc2d82 = () => interopDefault(import('..\\pages\\hk\\contact-us\\index.vue' /* webpackChunkName: "pages_hk_contact-us_index" */))
const _7a19acf4 = () => interopDefault(import('..\\pages\\hk\\new-arrivals\\index.vue' /* webpackChunkName: "pages_hk_new-arrivals_index" */))
const _7cde4242 = () => interopDefault(import('..\\pages\\hk\\special-offers\\index.vue' /* webpackChunkName: "pages_hk_special-offers_index" */))
const _c4082ff4 = () => interopDefault(import('..\\pages\\hk\\winelist\\index.vue' /* webpackChunkName: "pages_hk_winelist_index" */))
const _ed8f5da0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _0c6f5a7d = () => interopDefault(import('..\\pages\\_lang\\test.vue' /* webpackChunkName: "pages__lang_test" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _a441dadc,
    name: "about-us"
  }, {
    path: "/backstage",
    component: _92292ce6,
    name: "backstage"
  }, {
    path: "/cn",
    component: _466cf565,
    name: "cn"
  }, {
    path: "/contact-us",
    component: _7f505c65,
    name: "contact-us"
  }, {
    path: "/hk",
    component: _5031b466,
    name: "hk"
  }, {
    path: "/login",
    component: _16695b4a,
    name: "login"
  }, {
    path: "/new-arrivals",
    component: _2591a8ae,
    name: "new-arrivals"
  }, {
    path: "/special-offers",
    component: _262a47a5,
    name: "special-offers"
  }, {
    path: "/test",
    component: _cf7582b8,
    name: "test"
  }, {
    path: "/winelist",
    component: _c6f718ae,
    name: "winelist"
  }, {
    path: "/cn/about-us",
    component: _60208ef2,
    name: "cn-about-us"
  }, {
    path: "/cn/contact-us",
    component: _5fcf591a,
    name: "cn-contact-us"
  }, {
    path: "/cn/new-arrivals",
    component: _ac2c61c4,
    name: "cn-new-arrivals"
  }, {
    path: "/cn/special-offers",
    component: _fe7c3c4c,
    name: "cn-special-offers"
  }, {
    path: "/cn/winelist",
    component: _82d5ccc4,
    name: "cn-winelist"
  }, {
    path: "/hk/about-us",
    component: _a152f222,
    name: "hk-about-us"
  }, {
    path: "/hk/contact-us",
    component: _00bc2d82,
    name: "hk-contact-us"
  }, {
    path: "/hk/new-arrivals",
    component: _7a19acf4,
    name: "hk-new-arrivals"
  }, {
    path: "/hk/special-offers",
    component: _7cde4242,
    name: "hk-special-offers"
  }, {
    path: "/hk/winelist",
    component: _c4082ff4,
    name: "hk-winelist"
  }, {
    path: "/",
    component: _ed8f5da0,
    name: "index"
  }, {
    path: "/:lang/test",
    component: _0c6f5a7d,
    name: "lang-test"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
