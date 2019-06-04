import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navDrawer: false
  },

  getters: {},

  mutations: {
    toggleNavDrawer(state) {
      state.navDrawer = !state.navDrawer
    }
  },

  actions: {}
})
