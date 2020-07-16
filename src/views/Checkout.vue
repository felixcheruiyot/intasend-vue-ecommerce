<template>
  <div class="checkout my-4">
    <h1>This is an checkout page</h1>

    <b-button class="tp_button" @click="completeCheckout" variant="primary">Place order and Pay</b-button>
  </div>
</template>


<script>
import IntaSend from "intasend-inlinejs-sdk/src/index";

export default {
  name: "Checkout",
  data() {
    return {
      form: {
        name: "",
        email: "",
        address: "",
        amount: "9019",
        comment: ""
      }
    };
  },
  methods: {
    clearCart() {
      this.$store.commit("clearCart");
    },
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
    completeCheckout() {
      console.log(IntaSend);
      let intaSend = IntaSend.setup({
        publicAPIKey: "xx",
        redirectURL: "/",
        live: true
      });
      intaSend.run(this.form);
    }
  }
};
</script>