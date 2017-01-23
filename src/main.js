import './style.scss';
import './vendor';
import './vue-plugins';

 
import Vuetify from 'vuetify'
import Vue from 'vue';
import router from './routes';
import store from './store';
import SiteCenter from './components/site-center';

Vue.use(Vuetify);
Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'http://localhost:3003' : '';

const app = new Vue({
  router,
  store,
  components: {
    SiteCenter
  }
}).$mount('#app');

