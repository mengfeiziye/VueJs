import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import pageOne from '@/components/pageOne/pageOne';
import pageTwo from '@/components/pageTwo/pageTwo';
import pageThree from '@/components/pageThree/pageThree';
import pageFour from '@/components/pageFour/pageFour';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/pageOne',
      name: 'pageOne',
      component: pageOne
    },
    {
      path: '/pageTwo',
      name: 'pageTwo',
      component: pageTwo
    },
    {
      path: '/pageThree',
      name: 'pageThree',
      component: pageThree
    },
    {
      path: '/pageFour',
      name: 'pageFour',
      component: pageFour
    }
  ]
});
