<template>
  <div class="shopping-cart-wrapper">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">结账</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex';
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('checkout', products);
    }
  },
  components: {

  }
};
</script>

<style scoped lang="stylus">
</style>
