import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from '../../routes';
// import {router} from 'vue-router';

// Vue.use(VueRouter);




const state = {
  isLoggedIn: false,
  id:'',
  username: '',
  siteIDs: []
};

const mutations = {
  updateCurrUser(state, user) {
    state.id = user._id;
    state.username = user.username;
    state.siteIDs = user.siteIds;
    state.isLoggedIn = true;
    router.push(`/user-dashboard/${user.username}`);
    
  },
  logout(state) {
    state.isLoggedIn = false;
    router.push('/home');
  }
  
}

const actions = {
  getUser(context, user) {
    Vue.http.post('http://localhost:3003/login', user)
              .then(res => res.json())
              .then(json => context.commit('updateCurrUser', json.user))
           
  },
  signupUser(context, user) {
    Vue.http.post('http://localhost:3003/signup', user)
              .then(res => res.json())
              .then(json => {
                toastr.options.timeOut = 1200;
                toastr.success('Welcome to Book Page')
                router.push('/home')
              });  
  },
  saveNewUser(context, userData) {
    // console.log(userData);
    Vue.http.post('http://localhost:3003/signup', userData)
              .then(res => res.json())
              .then(json => console.log(json));
  },
  logout(context) {
    context.commit('logout');
  }
  
};

const getters = {
  getCurrUserID: (state) => { return state.id }
};

export default {
  state,
  getters,
  actions,
  mutations
}
