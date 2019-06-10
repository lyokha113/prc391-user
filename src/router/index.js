import Vue from 'vue'
import Router from 'vue-router'
// page
import Home from '@/pages/Home'
import ProductDetails from '@/pages/ProductDetails'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/product/:productId',
      component: ProductDetails
    }
  ]
})
