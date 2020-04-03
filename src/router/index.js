import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    path: '/home',
    component: () => import('@/views/home'),
    meta: {
      tag: 'SearchForm'
    }
  },
  {
    path: '/dialog',
    component: () => import('@/views/dialog'),
    meta: {
      tag: 'Dialog'
    }
  },
  {
    path: '/other',
    component: () => import('@/views/other'),
    meta: {
      tag: 'Other'
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  }
]
export default new Router({
  mode: 'history',
  routes,
  scrollBehavior: () => ({ y: 0 })
})
