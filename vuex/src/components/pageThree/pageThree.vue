<template>
  <div class="page-three-wrapper">
    <div>我是页面三,此页面同样可以修改author状态</div>
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

  },
  methods: {
    setAuthor: function () {
      // 载荷形式提交
      // this.$store.commit('newAuthor', {msg: this.txt}); // 对象形式参数
      // 对象形式提交
      this.$store.commit({
        type: 'newAuthor',
        msg: this.txt
      });
    }
  }
};
</script>

<style scoped lang="stylus">
</style>
