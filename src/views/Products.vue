<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard
        v-for="product in products"
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
  name: 'Products',
  components: { ProductCard },
  computed: mapGetters(['products']),
  methods: mapMutations(['addToCart']),
};
</script>

<style></style>
