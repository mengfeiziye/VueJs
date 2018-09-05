// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
// import router from './router';
import store from './store';
import { currency } from '@/common/scripts/currency';

Vue.filter('currency', currency);

Vue.config.productionTip = false;

Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // 把 store 对象提供给 'store' 选项，这可以把 store 的实例直接注入到所有子组件
  store, // 全局 store 子组件可通过 this.$store 访问到
  components: { App },
  template: '<App/>'
});
