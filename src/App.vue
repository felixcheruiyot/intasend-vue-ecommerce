<template>
  <div id="app">
    <b-navbar toggleable="lg" fixed="top" type="dark" variant="info">
      <b-navbar-brand href="#">E-commerce Shop Demo with IntaSend Payment</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link tag="b-nav-item" to="/">Shop</router-link>
          <router-link tag="b-nav-item" to="/checkout">
            Cart
            <b-icon icon="cart" />
            <span class="badge badge-danger" v-if="$store.getters.numOfCartItems > 0">{{$store.getters.numOfCartItems}}</span>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- Router view -->
    <router-view />
  </div>
</template>

<style scoped>
#app {
  margin-top: 55px;
}
</style>