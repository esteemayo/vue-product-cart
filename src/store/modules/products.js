import items from '@/products';

const products = {
  state: () => ({
    cart: [],
    products: items,
    showSidebar: false,
  }),
  mutations: {
    addToCart(state, payload) {
      const tempProducts = [...state.products];
      const specificProduct = tempProducts.find(
        (product) => product.id === payload
      );

      const index = tempProducts.indexOf(specificProduct);
      const product = tempProducts[index];

      product.qty = 1;
      product.inCart = true;
      const price = product.price;
      product.total = price;

      state.cart.push(product);
    },
    increment(state, payload) {
      const tempCart = [...state.cart];

      const selectedProduct = tempCart.find(
        (product) => product.id === payload
      );
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];

      product.qty++;
      const total = product.qty * product.price;
      product.total = parseFloat(total.toFixed(2));

      state.cart = [...tempCart];
    },
    decrement(state, payload) {
      let tempCart = [...state.cart];
      let tempProducts = [...state.products];

      const selectedProduct = tempCart.find((item) => item.id === payload);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];
      product.qty--;

      if (product.qty === 0) {
        tempCart = tempCart.filter((item) => item.id !== payload);
        const specificProduct = tempProducts.find(
          (product) => product.id === payload
        );
        const index = tempProducts.indexOf(specificProduct);
        const product = tempProducts[index];

        product.inCart = false;
        product.qty = 0;
        product.total = 0;
        state.products = [...tempProducts];
      }
      const total = product.qty * product.price;
      product.total = parseFloat(total.toFixed(2));
      state.cart = [...tempCart];
    },
    removeProduct(state, payload) {
      let tempCart = [...state.cart];
      let tempProducts = [...state.products];

      tempCart = tempCart.filter((item) => item.id !== payload);
      const specificProduct = tempProducts.find(
        (product) => product.id === payload
      );
      const index = tempProducts.indexOf(specificProduct);
      const product = tempProducts[index];

      product.inCart = false;
      product.qty = 0;
      product.total = 0;

      state.cart = [...tempCart];
      state.products = [...tempProducts];
    },
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    showSidebar: (state) => state.showSidebar,
    cartTotal(state) {
      return state.cart
        .map((item) => item.qty)
        .reduce((acc, curr) => (acc += curr), 0);
    },
    addTotals(state) {
      const total = state.cart
        .map((item) => item.total)
        .reduce((totalItem, cartItem) => (totalItem += cartItem), 0);

      return parseFloat(total.toFixed(2));
    },
    recommendedProducts(state) {
      const products = state.products.filter(
        (item) => item.recommended === true
      );
      return products;
    },
  },
};

export default products;
