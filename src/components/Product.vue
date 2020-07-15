<template>
  <div v-if="product">
    <b-card
      :title="product.name"
      :img-src="product.img"
      :img-alt="product.name"
      img-top
      style="max-width: 20rem;"
      class="product"
    >
      <h5 class="mb-2 text-dark">KES {{product.price}}</h5>
      <b-card-text class="text-secondary">{{product.description}}</b-card-text>
      <div>
        <b-button size="sm" @click="addToCart">Add to cart</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  methods: {
    addToCart() {
      alert("added");
    }
  }
};
</script>