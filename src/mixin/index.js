import Vue from 'vue'
const axios = require('axios')
export default Vue.mixin({
  methods: {
    async callAxios(method, url, data) {
      //get token from localStorage
      // var token = localStorage.getItem('access-token')

      //set config for axios
      let config = {
        method: method,
        url: url,
        data: data
      }
      return await axios(config)
    },

    getCurrentPage() {
      return window.location.href
    }
  }
})
