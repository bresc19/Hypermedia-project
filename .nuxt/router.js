import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3401f7f2 = () => interopDefault(import('../pages/AboutUs.vue' /* webpackChunkName: "pages/AboutUs" */))
const _6fa4acad = () => interopDefault(import('../pages/Areas.vue' /* webpackChunkName: "pages/Areas" */))
const _1787eaf2 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _6d028bf8 = () => interopDefault(import('../pages/People.vue' /* webpackChunkName: "pages/People" */))
const _f1832fe6 = () => interopDefault(import('../pages/Products.vue' /* webpackChunkName: "pages/Products" */))
const _65f623ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AboutUs",
    component: _3401f7f2,
    name: "AboutUs"
  }, {
    path: "/Areas",
    component: _6fa4acad,
    name: "Areas"
  }, {
    path: "/Contact",
    component: _1787eaf2,
    name: "Contact"
  }, {
    path: "/People",
    component: _6d028bf8,
    name: "People"
  }, {
    path: "/Products",
    component: _f1832fe6,
    name: "Products"
  }, {
    path: "/",
    component: _65f623ce,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
