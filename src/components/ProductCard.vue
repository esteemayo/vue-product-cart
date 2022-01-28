<template>
  <div>
    <div class="card-title">{{ product.name }}</div>
    <div class="card-body">
      <i :class="productIcon"></i>
      <form>
        <div class="row">
          <div class="cell">
            <label>Type:</label>
          </div>
          <div class="cell">
            <em>{{ product.type }}</em>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Price:</label>
          </div>
          <div class="cell">${{ product.price }}</div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <button
        class="btn btn-light"
        @click="addToCart(product.id)"
        :disabled="product.inCart"
      >
        <span v-if="product.inCart">Incart</span>
        <span v-else>Add to cart</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
    addToCart: {
      type: Function,
      required: true,
    },
  },
  computed: {
    productIcon() {
      return `icofont-10x icofont-${this.product.icon}`;
    },
  },
};
</script>

<style scoped>
button:disabled {
  color: var(--topBarLinkHoverBackground);
  cursor: not-allowed;
}
</style>
