<template>
  <div class="page-four-wrapper">
    <div>我是页面四,此页面修改count状态</div>
    <div>count is {{ count }}</div>
    <div>
      <button @click="add">+</button>
      <button @click="decrement">-</button>
    </div>
    <page-four-inner></page-four-inner>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex';
import pageFourInner from '@/components/pageFourInner/pageFourInner.vue';
export default {
  data() {
    return {

    };
  },
  components: {
    pageFourInner
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    // vue  提供了mapAction 函数，
    // 它和mapState  是一样的，把我们的 action 直接映射到store 里面的action中。
    // increment () { // 组件内分发具体的处理函数
    //   this.$store.dispatch('increment')
    // },
    // decrement () { // 组件内分发具体的处理函数
    //   this.$store.dispatch('decrement')
    // }
    // 下面我们使用一种比较简洁的写法
    // ...mapActions(['increment', 'decrement'])
    /**
      如果事件处理函数名字和action的名字不同，给mapActions
      提供一个对象，对象的属性是事件处理函数名字, 属性值是 对应的dispatch 的action 的名字。
    */
    // 这里实际是为了改变事件的名字
    ...mapActions(['decrement']),
    ...mapActions({
      add: 'increment'
    })
  }
};
</script>

<style scoped lang="stylus">
</style>
