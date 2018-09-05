import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart'; // 实现购物车功能
import products from './modules/products'; // 初始化产品列表

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    products
  }
});
