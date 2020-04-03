import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import './directive'
import vuescroll from 'vuescroll/dist/vuescroll-native'
Vue.use(vuescroll)

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
