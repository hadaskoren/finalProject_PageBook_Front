import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from '../../routes';
// import {router} from 'vue-router';

// Vue.use(VueRouter);




const state = {
  id:'',
  username: '',
  siteIDs: []
};

const mutations = {
  updateCurrUser(state, user) {
    state.id = user._id;
    state.username = user.username;
    state.siteIDs = user.siteIds;
    // console.log(user);
    router.push(`/user-dashboard/${user.username}`);
    
  }
  
}

const actions = {
  getUser(context, user) {
    Vue.http.post('http://localhost:3003/login', user)
              .then(res => res.json())
              .then(json => context.commit('updateCurrUser', json.user))
           
  }
  
};

const getters = {
};

export default {
  state,
  getters,
  actions,
  mutations
}
