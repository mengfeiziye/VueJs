import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    count: 0,
    author: 'Ye Ming',
    todos: [
      { id: 1, text: 'Chinese', done: true },
      { id: 2, text: 'English', done: false },
      { id: 3, text: 'French', done: true },
      { id: 4, text: 'Korean', done: true }
    ]
  },
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
  // 重要：mutation 必须是同步函数（如何处理异步操作，需要 action）
  mutations: { // 只有 mutation 才能改变 state，所以处理函数会自动获得一个默认参数 state
    newAuthor(state, payload) { // 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload[应该是一个对象]）
      state.author = payload.msg;
    },
    // newAuthor(state, { msg }) { // 对象的解构赋值
    //   state.author = msg;
    // },
    INCREMENT(state) {
      state.count++;
      console.log(state.count);
    },
    DECREMENT(state) {
      state.count--;
      console.log(state.count);
    }
  },
  // 有时候我们需要从 store 中的 state 中派生出一种状态，例如对列表进行过滤并计算
  getters: { // 可以理解为 store 的计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    }
  },
  actions: { // 用来提交 mutation，处理函数同样也会获得一个默认参数 context
    increment(context) {
      context.commit('INCREMENT');
    },
    decrement({commit}) { // 对象的解构赋值（因为函数的参数是一个对象）
      commit('DECREMENT');
    }
  }
});

export default store;
