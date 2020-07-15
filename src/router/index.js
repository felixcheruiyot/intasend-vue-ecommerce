import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '../views/Shop.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
