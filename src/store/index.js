import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  subMenu: ['SearchForm', 'Dialog', 'Other'],
  tabs: ['SearchForm'],
  currentTabName: 'SearchForm'
}
const mutations = {
  AddTab (state, val) {
    let arr = state.tabs
    arr.push(val)
    state.tabs = arr
  },
  removeTab (state, index) {
    return state.tabs.splice(index, 1)
  },
  setCurrentTabName (state, val) {
    state.currentTabName = val
  }
}
const getters = {
  menuActiveIndex: state => {
    return state.subMenu.findIndex(el => el === state.currentTabName)
  }
}
const actions = {}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
