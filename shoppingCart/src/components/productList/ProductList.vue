<template>
  <div class="product-list-wrapper">
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.title }} - {{ product.price | currency}}
        <br>
        <button
          :disabled="!product.inventory"
          @click="addProductToCart(product)">
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {

    };
  },
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addProductToCart'
  ]),
  created() {
    this.$store.dispatch('getAllProducts');
  },
  components: {

  }
};
</script>

<style scoped lang="stylus">
</style>
