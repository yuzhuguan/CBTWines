import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _92292ce6 = () => interopDefault(import('..\\pages\\backstage\\index.vue' /* webpackChunkName: "pages_backstage_index" */))
const _466cf565 = () => interopDefault(import('..\\pages\\cn\\index.vue' /* webpackChunkName: "pages_cn_index" */))
const _5031b466 = () => interopDefault(import('..\\pages\\hk\\index.vue' /* webpackChunkName: "pages_hk_index" */))
const _16695b4a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _ed8f5da0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/backstage",
    component: _92292ce6,
    name: "backstage"
  }, {
    path: "/cn",
    component: _466cf565,
    name: "cn"
  }, {
    path: "/hk",
    component: _5031b466,
    name: "hk"
  }, {
    path: "/login",
    component: _16695b4a,
    name: "login"
  }, {
    path: "/",
    component: _ed8f5da0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
