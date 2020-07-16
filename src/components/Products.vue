<template>
  <div class="products">
    <div class="row">
      <product
        v-for="product in products"
        :key="product.id"
        :product.sync="product"
        class="col-12 col-md-4 mb-4"
      ></product>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "Products",
  components: {
    Product
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Nike SB Nyjah Free",
          price: 1000,
          description:
            "Dubbed as arguably the most innovative skate shoe in the market today, the Nike SB Nyjah Free displays an unassuming and simple aesthetic that features a lot of technical functionalities for skateboarding.",
          img:
            "https://cdn.runrepeat.com/i/nike/28606/nike-sb-nyjah-free-chaussures-de-fitness-mixte-adulte-multicolore-thunderstorm-white-obsidian-400-43-eu-multicolore-thunderstorm-white-obsidian-400-6db0-380.jpg"
        },
        {
          id: 2,
          name: "Nike Air Force 1 07",
          price: 4200,
          description:
            "The Nike Air Force 1 07 sneaker is an excellent buy in many ways. Many are complimenting it for its usually monochromatic colorway and neat silhouette. ",
          img:
            "https://cdn.runrepeat.com/i/nike/25004/nike-mens-air-force-1-low-07-basketball-shoes-black-black-315122-001-black-black-3cb8-380.jpg"
        },
        {
          id: 3,
          name: "Nike Air Max 270",
          price: 10,
          description:
            "This Air Max model ticks off all the boxes concerning comfort, support, superb fit, and lightness, which makes up for its expensive price point.",
          img:
            "https://cdn.runrepeat.com/i/nike/28278/nike-air-max-270-desert-sand-hot-punch-volt-total-orange-7d46-380.jpg"
        }
      ]
    };
  }
};
</script>