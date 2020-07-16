<template>
  <div class="thank-you">
    <div class="container my-4 text-center">
      <h5 class="bg-success text-white p-4">Thank you for your order</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thankyou",
  created() {
    this.$store.commit("clearCart");
  }
};
</script>

<style scoped>
.thank-you {
  margin-top: 89px;
}
</style>