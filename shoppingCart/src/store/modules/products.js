// 主要用来初始化产品列表
import shop from '../common/shop';

// init state
const state = {
  all: []
};

// getters
const getters = { // 组件中的计算属性通过 getters 拿到 state
  allProducts: state => state.all
};

// actions
const actions = { // 异步提交 mutation 处理之后的 state
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products);
    });
  }
};

// mutations
const mutations = {
  setProducts(state, products) { // 状态注入，等待 actions 提交
    state.all = products;
  },
  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.inventory--;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
