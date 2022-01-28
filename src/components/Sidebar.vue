<template>
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button @click="toggleSidebar" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table" v-if="cart.length > 0">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td><i class="icofont-carrot icofont-3x"></i></td>
              <td>{{ item.name }}</td>
              <td>${{ item.price }}</td>
              <td class="center">{{ item.qty }}</td>
              <td>${{ item.total }}</td>
              <td class="center">
                <button
                  class="btn btn-light cart-inc"
                  @click="decrement(item.id)"
                >
                  -</button
                >&nbsp;
                <button
                  class="btn btn-light cart-dec"
                  @click="increment(item.id)"
                >
                  +</button
                >&nbsp;
                <button
                  class="btn btn-light cart-remove"
                  @click="removeProduct(item.id)"
                >
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p v-if="cart.length < 1" class="center"><em>No items in cart</em></p>
        <hr v-if="cart.length > 0" />
        <div v-if="cart.length > 0" class="spread">
          <span><strong>Total:</strong> ${{ addTotals }}</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Sidebar',
  computed: mapGetters(['cart', 'addTotals']),
  methods: {
    ...mapMutations([
      'toggleSidebar',
      'increment',
      'decrement',
      'removeProduct',
    ]),
  },
};
</script>

<style scoped>
.cart-inc,
.cart-dec {
  color: var(--topNavBackground);
  padding: 0px 7px;
  font-size: 20px;
  border: none;
}

.cart-inc:hover,
.cart-dec:hover {
  background: var(--bodyBackground);
  color: var(--cartBackground);
}

.cart-inc:focus,
.cart-dec:focus {
  outline: none;
}
</style>
