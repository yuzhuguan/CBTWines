import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2585f3f0 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages_about-us" */))
const _92292ce6 = () => interopDefault(import('..\\pages\\backstage\\index.vue' /* webpackChunkName: "pages_backstage_index" */))
const _ed8f5da0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _42ac7d06 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages_contact-us" */))
const _16fdcbe0 = () => interopDefault(import('..\\pages\\find-us.vue' /* webpackChunkName: "pages_find-us" */))
const _16695b4a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _7e77d6b9 = () => interopDefault(import('..\\pages\\new-arrivals.vue' /* webpackChunkName: "pages_new-arrivals" */))
const _bc940386 = () => interopDefault(import('..\\pages\\special-offers.vue' /* webpackChunkName: "pages_special-offers" */))
const _cf7582b8 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _61390d40 = () => interopDefault(import('..\\pages\\wine-list.vue' /* webpackChunkName: "pages_wine-list" */))

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
    component: _2585f3f0,
    name: "about-us___en"
  }, {
    path: "/backstage",
    component: _92292ce6,
    name: "backstage___en"
  }, {
    path: "/cn",
    component: _ed8f5da0,
    name: "index___cn"
  }, {
    path: "/contact-us",
    component: _42ac7d06,
    name: "contact-us___en"
  }, {
    path: "/find-us",
    component: _16fdcbe0,
    name: "find-us___en"
  }, {
    path: "/hk",
    component: _ed8f5da0,
    name: "index___hk"
  }, {
    path: "/login",
    component: _16695b4a,
    name: "login___en"
  }, {
    path: "/new-arrivals",
    component: _7e77d6b9,
    name: "new-arrivals___en"
  }, {
    path: "/special-offers",
    component: _bc940386,
    name: "special-offers___en"
  }, {
    path: "/test",
    component: _cf7582b8,
    name: "test___en"
  }, {
    path: "/wine-list",
    component: _61390d40,
    name: "wine-list___en"
  }, {
    path: "/cn/about-us",
    component: _2585f3f0,
    name: "about-us___cn"
  }, {
    path: "/cn/backstage",
    component: _92292ce6,
    name: "backstage___cn"
  }, {
    path: "/cn/contact-us",
    component: _42ac7d06,
    name: "contact-us___cn"
  }, {
    path: "/cn/find-us",
    component: _16fdcbe0,
    name: "find-us___cn"
  }, {
    path: "/cn/login",
    component: _16695b4a,
    name: "login___cn"
  }, {
    path: "/cn/new-arrivals",
    component: _7e77d6b9,
    name: "new-arrivals___cn"
  }, {
    path: "/cn/special-offers",
    component: _bc940386,
    name: "special-offers___cn"
  }, {
    path: "/cn/test",
    component: _cf7582b8,
    name: "test___cn"
  }, {
    path: "/cn/wine-list",
    component: _61390d40,
    name: "wine-list___cn"
  }, {
    path: "/hk/about-us",
    component: _2585f3f0,
    name: "about-us___hk"
  }, {
    path: "/hk/backstage",
    component: _92292ce6,
    name: "backstage___hk"
  }, {
    path: "/hk/contact-us",
    component: _42ac7d06,
    name: "contact-us___hk"
  }, {
    path: "/hk/find-us",
    component: _16fdcbe0,
    name: "find-us___hk"
  }, {
    path: "/hk/login",
    component: _16695b4a,
    name: "login___hk"
  }, {
    path: "/hk/new-arrivals",
    component: _7e77d6b9,
    name: "new-arrivals___hk"
  }, {
    path: "/hk/special-offers",
    component: _bc940386,
    name: "special-offers___hk"
  }, {
    path: "/hk/test",
    component: _cf7582b8,
    name: "test___hk"
  }, {
    path: "/hk/wine-list",
    component: _61390d40,
    name: "wine-list___hk"
  }, {
    path: "/",
    component: _ed8f5da0,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
