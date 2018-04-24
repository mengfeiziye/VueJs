<template>
  <div class="page-two-wrapper">
    <div>我是页面二,此页面修改author状态</div>
    <input type="text" placeholder="请输入内容" v-model="txt">
    <input type="button" value="修改" @click="setAuthor">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      txt: ''
    };
  },
  components: {
    // ...
  },
  methods: {
    setAuthor: function () {
      // 组件中使用 this.$store.commit('xxx') 提交 mutation。或者使用辅助函数 mapMutations
      // 载荷形式提交
      this.$store.commit('newAuthor', {msg: this.txt}); // 对象形式参数
      // 对象形式提交
      // this.$store.commit({
      //   type: 'newAuthor',
      //   msg: this.txt
      // });
    }
  }
};
</script>

<style scoped lang="stylus">
</style>
