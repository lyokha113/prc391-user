import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hostname: 'prc391.ml',
    api: {
      login: 'http://www.prc391.ml/login',
      register: 'http://www.prc391.ml/register'
    }
  }
})
