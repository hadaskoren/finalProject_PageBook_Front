import './style.scss';
import './vendor';
import './vue-plugins';


import Vue from 'vue';
import router from './routes';
import store from './store';
// import MainNav from './components/main-nav';
import SiteCenter from './components/site-center';
// import Editor from './components/editor';

Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'http://localhost:3003' : '';

const app = new Vue({
  router,
  store,
  components: {
    SiteCenter
  }
}).$mount('#app');

