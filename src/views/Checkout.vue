<template>
  <div class="checkout container">
    <div class="row">
      <div class="col-12 col-lg-7">
        <h3>You have {{$store.getters.numOfCartItems}} items in cart.</h3>
        <div class="border p-2" v-for="item in $store.getters.cartItems" :key="item.id">
          <div class="row">
            <div class="col-4">
              <img :src="item.img" :alt="item.name" class="img-fluid" />
            </div>
            <div class="col-4">
              <p class="h5">{{item.name}}</p>
            </div>
            <div class="col-2">
              <p class="h5">KES {{item.price}}</p>
            </div>
            <div class="col-2">
              <b-button variant="danger" size="sm" @click="removeFromCart(item)">
                <b-icon icon="trash" />
              </b-button>
            </div>
          </div>
        </div>
        <div class="my-2" v-if="$store.getters.numOfCartItems > 0">
          <b-button variant="danger" size="sm" @click="clearCart">Clear cart</b-button>
        </div>
        <div class="my-2" v-if="$store.getters.numOfCartItems == 0">
          <router-link to="/">Start shopping</router-link>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <b-card title="Cart Summary" v-if="$store.getters.numOfCartItems > 0">
          <b-form @submit.prevent="completeCheckout">
            <div class="my-2">
              <label>Name</label>
              <b-form-input v-model="form.name" />
            </div>
            <div class="my-2">
              <label>Email</label>
              <b-form-input type="email" v-model="form.email" />
            </div>
            <div class="my-2">
              <label>Address</label>
              <b-form-input v-model="form.address" />
            </div>
            <b-card-text class="h4 my-4">Cart Total KES {{$store.getters.total}}</b-card-text>
            <div class="my-2">
              <b-button
                :disabled="$store.getters.total === 0"
                type="submit"
                variant="primary"
                block
              >Place order and Pay</b-button>
            </div>
          </b-form>
        </b-card>
      </div>
    </div>
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
        amount: "",
        comment: "",
        api_ref: "",
        currency: "KES"
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
      if (!this.form.email) {
        return alert("Email is required");
      }
      if (!this.form.name) {
        return alert("Name is required");
      }
      let intaSend = IntaSend.setup({
        publicAPIKey: "TPPublicKey_91ffc81a-8ac4-419e-8008-7091caa8d73f",
        redirectURL: "https://intasend-ecommerce-demo.netlify.app/#/thank-you/",
        live: false
      });

      this.form.amount = this.$store.getters.total;
      this.form.api_ref = "Store 7 Orders";
      intaSend.run(this.form);
    }
  }
};
</script>

<style scoped>
.checkout {
  margin-top: 89px;
}
img {
  height: 89px;
}
</style>