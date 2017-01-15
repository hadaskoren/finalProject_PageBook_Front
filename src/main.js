import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import router from './routes';
import store from './store';
// import MainNav from './components/main-nav';
// import SiteCenter from './components/site-center';
// import Editor from './components/editor';


const app = new Vue({
  router,
  store,
  components: {
    // Editor
  }
}).$mount('#app');

