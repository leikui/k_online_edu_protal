import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3dd897df = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _33c35050 = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _4b683d46 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages/user/login" */))
const _1478e454 = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages/user/register" */))
const _9fcdf3f2 = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _3ca4a858 = () => interopDefault(import('..\\pages\\orders\\_oid.vue' /* webpackChunkName: "pages/orders/_oid" */))
const _772c4f7c = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages/pay/_pid" */))
const _7916b41b = () => interopDefault(import('..\\pages\\player\\_vid.vue' /* webpackChunkName: "pages/player/_vid" */))
const _cedf1f80 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _688d125a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/course",
    component: _3dd897df,
    name: "course"
  }, {
    path: "/teacher",
    component: _33c35050,
    name: "teacher"
  }, {
    path: "/user/login",
    component: _4b683d46,
    name: "user-login"
  }, {
    path: "/user/register",
    component: _1478e454,
    name: "user-register"
  }, {
    path: "/course/:id",
    component: _9fcdf3f2,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _3ca4a858,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _772c4f7c,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _7916b41b,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _cedf1f80,
    name: "teacher-id"
  }, {
    path: "/",
    component: _688d125a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
