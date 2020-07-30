import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import ProductCenter from '../views/ProductCenter.vue';
import About from '../views/About.vue';
import News from '../views/News.vue';
import Promotion from '../views/Promotion.vue';
import Phone from '../views/Phone.vue';


Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/product_center',
      name: 'ProductCenter',
      component: ProductCenter
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/promotion',
      name: 'Promotion',
      component: Promotion
    },
    {
      path: '/phone',
      name: 'phone',
      component: Phone
    },

    {
      path: '/job_recruitment',
      name: 'JobRecruitment',
      component: () =>import('../views/about/JobRecruitment.vue')
    },
    {
      path: '/western',
      name: 'western',
      component: () =>import('../views/ExperimentalServices/western.vue')
    },
    {
      path: '/real_time',
      name: 'real_time',
      component: () =>import('../views/ExperimentalServices/realtime.vue')
    },
    {
      path: '/bingli',
      name: 'bingli',
      component: () =>import('../views/ExperimentalServices/bingli.vue')
    },
    {
      path: '/elisa',
      name: 'elisa',
      component: () =>import('../views/ExperimentalServices/elisa.vue')
    },
    {
      path: '/mopian',
      name: 'mopian',
      component: () =>import('../views/ExperimentalServices/mopian.vue')
    },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
