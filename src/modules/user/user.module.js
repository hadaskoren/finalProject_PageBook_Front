import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from '../../routes';
// import {router} from 'vue-router';

// Vue.use(VueRouter);




const state = {
  isLoggedIn: false,
  id: '',
  username: '',
  siteIDs: []
};

const mutations = {
  updateCurrUser(state, user) {
    console.log('updating useererr');
    state.id = user._id;
    state.username = user.username;
    state.siteIDs = user.siteIds;
    console.log('22222',state.siteIDs);
    state.isLoggedIn = true;
    localStorage.setItem('loginToken', JSON.stringify(user.token));
    router.push(`/user-dashboard/${user.username}`);

  },
  logout(state) {
    state.isLoggedIn = false;
    localStorage.removeItem('loginToken');
    router.push('/home');
  }

}

const actions = {
  checkIfLoggedWithToken(context) {
    let tokenInLocalStorage =  localStorage.getItem('loginToken');
    console.log(tokenInLocalStorage);
    if (tokenInLocalStorage) {
      console.log(123);
      Vue.http.post('http://localhost:3003/token-login', {token: JSON.parse(tokenInLocalStorage)})
        .then(res => res.json())
        .then(json => { console.log('json.user',json.user); context.commit('updateCurrUser', json.user) })
    }
  },
  getUser(context, user) {
    Vue.http.post('http://localhost:3003/login', user)
      .then(res => res.json())
      .then(json => { console.log(json); context.commit('updateCurrUser', json) })

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
};

export default {
  state,
  getters,
  actions,
  mutations
}
