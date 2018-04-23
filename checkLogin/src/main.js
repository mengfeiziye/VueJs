// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// 登录验证
router.beforeEach((to, from, next) => {
  // sessionStorage.removeItem('accessTooken');
  // sessionStorage.removeItem('path');
  if (to.path === 'login') { // 直接进入登录界面
    next();
  } else { // 非首页路由验证是否登录
    if (to.meta.requiresAuth && !sessionStorage.getItem('accessTooken')) {
      let path = to.fullPath;
      sessionStorage.setItem('path', path);
      next({path: '/loginTip'});
      setTimeout(() => {
        next({
          path: '/login',
          redirect: path
        });
      }, 1000);
    } else {
      next();
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
