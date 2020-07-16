<template>
  <div id="app">
    <b-navbar toggleable="lg" fixed="top" type="dark" variant="info">
      <router-link tag="b-navbar-brand" to="/">E-commerce Shop Demo</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link tag="b-nav-item" to="/">Shop Now</router-link>
          <b-nav-item href="https://developers.intasend.com/" target="_blank">Developers API</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <router-link tag="b-nav-item" to="/checkout">
            Cart
            <b-icon icon="cart" />
            <span
              class="badge badge-danger"
              v-if="$store.getters.numOfCartItems > 0"
            >{{$store.getters.numOfCartItems}}</span>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- Router view -->
    <router-view />

    <div class="container">
      <div class="my-4">
        This site demonstrates how
        <a href="https://intasend.com" target="_blank">IntaSend Payments</a> site integration works. You can get access to this code at
        <a
          href="https://github.com/felixcheruiyot/intasend-vue-ecommerce"
          target="_blank"
        >github</a> . Get started with
        <a
          href="https://developers.intasend.com/"
          target="_blank"
        >IntaSend developers API here</a>.
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  margin-top: 55px;
}
</style>