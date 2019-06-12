import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken:
      localStorage.getItem('userToken') == undefined
        ? null
        : localStorage.getItem('userToken')
  },
  getter: {},
  mutations: {
    setUserToken(state, payload) {
      state.userToken = payload
      localStorage.setItem('userToken', payload)
    }
  }
})
