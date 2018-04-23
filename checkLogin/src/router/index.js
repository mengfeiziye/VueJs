import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import pageOne from '@/components/pageOne/pageOne';
import pageTwo from '@/components/pageTwo/pageTwo';
import pageThree from '@/components/pageThree/pageThree';
import pageFour from '@/components/pageFour/pageFour';
import login from '@/components/login/login';
import loginTip from '@/components/loginTip/loginTip';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: { requiresAuth: false }
    },
    {
      path: '/pageOne',
      name: 'pageOne',
      component: pageOne,
      meta: { requiresAuth: true }
    },
    {
      path: '/pageTwo',
      name: 'pageTwo',
      component: pageTwo,
      meta: { requiresAuth: true }
    },
    {
      path: '/pageThree',
      name: 'pageThree',
      component: pageThree,
      meta: { requiresAuth: true }
    },
    {
      path: '/pageFour',
      name: 'pageFour',
      component: pageFour,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/loginTip',
      name: 'loginTip',
      component: loginTip
    }
  ]
});
