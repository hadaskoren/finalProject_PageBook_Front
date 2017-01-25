import './style.scss';
import './vendor';
import './vue-plugins';

 
import Vuetify from 'vuetify'
import Vue from 'vue';
import router from './routes';
import store from './store';

Vue.use(Vuetify);
Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'http://localhost:3003' : '';

const app = new Vue({
  router,
  store,
  components: {
  },
  created() {
    this.$store.dispatch('checkIfLoggedWithToken');
  }
}).$mount('#app');

