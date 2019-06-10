import Vue from 'vue'
const axios = require('axios')
export default Vue.mixin({
  methods: {
    async callAxios(method, url, params) {
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (
            error.response.status &&
            (error.response.status === 403 || error.response.status === 401)
          ) {
            localStorage.removeItem('access-token')
            localStorage.removeItem('user')
          }
          console.error(error)
        }
      )

      const token = localStorage.getItem('access-token')

      //set config for axios
      let config = {
        method: method,
        url: url,
        params: params
        // headers: {
        //   Authorization: 'Bearer ' + token
        // }
      }
      return await axios(config)
    },

    getCurrentPage() {
      return window.location.href
    }
  }
})
