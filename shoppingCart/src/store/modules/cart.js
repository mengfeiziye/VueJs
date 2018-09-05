import shop from '../common/shop';

// 定义 state
const state = {
  added: [], // 当前添加商品的数组
  checkoutStatus: null // 结账状态
};

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
  cartProducts: (state, getters, rootState) => { // rootState 模糊
    return state.added.map(({ id, quantity }) => {
      // 商品选中次数
      const product = rootState.products.all.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  },
  cartTotalPrice: (state, getters) => {
    // reduce 函数 https://segmentfault.com/a/1190000005921341
    /*
    arr.reduce((prev, cur, index, arr) => {});
    · prev: 第一项的值或者上一次叠加的结果值
    · cur: 当前会参与叠加的项
    · index: 当前值的索引
    · arr: 数组本身
    */
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

// mutations
const mutations = {
  pushProductToCart(state, { id }) { // 对象的解构赋值，载荷 payload
    state.added.push({
      id, // payload.id
      quantity: 1
    });
  },
  incrementItemQuantity(state, { id }) { // 对象的解构赋值，载荷 payload
    const cartItem = state.added.find(item => item.id === id);
    cartItem.quantity++;
  },
  setCartItems(state, { items }) { // 对象的解构赋值，载荷 payload
    state.added = items; // payload.items
  },
  // setCartItems(state, payload) {
  //   state.added = payload.items;
  // },
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  }
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    // 备份当前购物车物品
    const savedCartItems = [...state.added];
    // 发出结账请求
    commit('setCheckoutStatus', null);
    // 清空购物车
    commit('setCartItems', { items: [] });
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      }
    );
  },
  addProductToCart({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = state.added.find(item => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id });
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      // remove 1 item from stock
      commit('decrementProductInventory', { id: product.id });
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
