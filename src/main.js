import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store';
import router from './routes';

const app = new Vue({
  router,
  store,
  components: {
  }
}).$mount('#app');

