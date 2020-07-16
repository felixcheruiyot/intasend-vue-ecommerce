<template>
  <div class="shop">
    <div class="container my-4">
      <Products />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "@/components/Products.vue";

export default {
  name: "Shop",
  components: {
    Products
  }
};
</script>

<style scoped>
.shop {
  margin-top: 89px;
}
</style>