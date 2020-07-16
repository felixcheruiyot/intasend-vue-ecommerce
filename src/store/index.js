import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    total(state) {
      let total = 0
      state.cart.map(item => {
        total += item.price
      })
      return total
    },
    cartItems(state) {
      return state.cart
    },
    numOfCartItems(state) {
      return state.cart.length
    }
  },
  mutations: {
    addToCart(state, product) {
      this.state.cart.push(product)
    },
    removeFromCart(state, product) {
      let index = this.state.cart.indexOf(product)
      this.state.cart.splice(index)
    },
    clearCart() {
      this.state.cart = []
    }
  },
  actions: {},
  modules: {}
})