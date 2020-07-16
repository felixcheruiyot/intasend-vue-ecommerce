<template>
  <div class="thank-you">
    <div class="container my-4">
      <b-alert variant="success">Thank you for your order</b-alert>
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