import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/home.scss';
import VeLine from 'v-charts/lib/bmap.common.js';
import vueToTop from 'vue-totop'

Vue.component(VeLine.name, VeLine);
Vue.use(vueToTop);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
