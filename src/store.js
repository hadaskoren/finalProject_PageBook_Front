import Vuex from 'vuex';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from './routes';
import userModule from './modules/user/user.module';
import currSiteModule from './modules/currSite/currSite.module';

const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  modules: {
    user : userModule,
    currSite: currSiteModule,
  },
  strict : !isProduction
})
