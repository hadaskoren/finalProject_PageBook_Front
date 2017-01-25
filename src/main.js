import './style.scss';
import './vendor';
import './vue-plugins';
import Vuetify from 'vuetify'
import Vue from 'vue';
import router from './routes';
import store from './store';
import VueMediumEditor from 'medium-editor';
// import VueMediumEditor from 'vue2-medium-editor';
// var vueSmoothScroll = require('vue-smoothscroll');
// Vue.use(vueSmoothScroll);
Vue.use(Vuetify);
// Vue.use(editor);

// var cloudinary = require('cloudinary');
// var fs = require('fs');

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


