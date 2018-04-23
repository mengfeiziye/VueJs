<template>
  <div class="login-wrapper">
    <div>
      <label for="">用户名：</label><input ref="username" v-model.trim="username" type="text" placeholder="请输入用户名">
    </div>
    <div>
      <label for="">密码：</label><input ref="password" v-model="password" type="password" placeholder="请输入密码">
    </div>
    <div><button @click="login">登录</button></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    setSessionStorage() {
      let ss = window.sessionStorage;
      if (this.username === 'admin' && this.password === '123456') {
        ss.setItem('accessTooken', true);
      }
    },
    login() {
      this.setSessionStorage();
      if (sessionStorage.getItem('accessTooken')) {
        let redirect = sessionStorage.getItem('path');
        this.$router.push({
          path: redirect
        });
        console.log('登录成功');
      } else {
        console.log('登录失败');
      }
    }
  },
  components: {

  }
};
</script>

<style scoped lang="stylus">
</style>
