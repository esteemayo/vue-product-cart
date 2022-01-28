<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>

  <main class="wrapper">
    <h2>Recommended</h2>
    <div class="recommended">
      <ProductCard
        v-for="product in recommendedProducts"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
        class="card"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Home',
  components: { ProductCard },
  computed: mapGetters(['recommendedProducts', 'products', 'cart']),
  methods: {
    ...mapMutations(['addToCart']),
  },
};
</script>

<style></style>
