<template>
  <div class="page-one-wrapper">
    <div>我是页面一</div>
    <p>count is {{ count }}</p>
    <p>作者：{{ author }}</p>
    <div v-for="(item, index) in doneTodos" :key="index">
      <p><span>{{item.id}}、</span><span>{{item.text}}、</span><span>{{item.done}}</span></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      // ...
    };
  },
  components: {
    // ...
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    author() {
      return this.$store.state.author;
    },
    doneTodos() {
      return this.$store.getters.doneTodos;
    }
  }
};
</script>

<style scoped lang="stylus">
</style>
