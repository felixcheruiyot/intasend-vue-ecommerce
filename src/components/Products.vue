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
          name: "Nike 1",
          price: 10,
          description: "Awesome Nike shoes",
          img:
            "https://i.pinimg.com/236x/7a/ae/e0/7aaee08864597f107bb23deea040f064.jpg"
        },
        {
          id: 2,
          name: "Nike 2",
          price: 10,
          description: "Awesome Nike shoes",
          img:
            "https://i.pinimg.com/236x/7a/ae/e0/7aaee08864597f107bb23deea040f064.jpg"
        },
        {
          id: 3,
          name: "Nike 3",
          price: 10,
          description: "Awesome Nike shoes",
          img:
            "https://i.pinimg.com/236x/7a/ae/e0/7aaee08864597f107bb23deea040f064.jpg"
        },
        {
          id: 4,
          name: "Nike 4",
          price: 10,
          description: "Awesome Nike shoes",
          img:
            "https://i.pinimg.com/236x/7a/ae/e0/7aaee08864597f107bb23deea040f064.jpg"
        },
        {
          id: 5,
          name: "Nike 5",
          price: 10,
          description: "Awesome Nike shoes",
          img:
            "https://i.pinimg.com/236x/7a/ae/e0/7aaee08864597f107bb23deea040f064.jpg"
        },
        {
          id: 6,
          name: "Nike 6",
          price: 10,
          description: "Awesome Nike shoes",
          img:
            "https://i.pinimg.com/236x/7a/ae/e0/7aaee08864597f107bb23deea040f064.jpg"
        }
      ]
    };
  }
};
</script>