import Vuex from 'vuex';
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
