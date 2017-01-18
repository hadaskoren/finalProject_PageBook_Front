import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from '../../routes';

const state = {
  sitesList: [],
  isLoggedIn: false,
  id: '',
  username: '',
  siteIDs: []
};

const mutations = {
  addSiteIdToCurrUser(state, id){
    alert(id);
    state.siteIDs.push(id);
  },
  updateCurrUser(state, user) {
    console.log('updating useererr');
    state.id = user._id;
    state.username = user.username;
    state.siteIDs = user.siteIds;
    console.log('22222', state.siteIDs);
    state.isLoggedIn = true;
    localStorage.setItem('loginToken', JSON.stringify(user.token));
    router.push(`/user-dashboard/${user.username}`);
  },
  logout(state) {
    state.isLoggedIn = false;
    localStorage.removeItem('loginToken');
    router.push('/home');
  },
  updateSitesList(state, list) {
    state.sitesList = list;
  }
}

const actions = {
  getSitesList(context, sitesIds) {
    console.log('Gettongs sites list', context.state.siteIDs);
    Vue.http.post(`http://localhost:3003/data/sites/list`, context.state.siteIDs)
            .then(res => res.json())
            .then(json => console.log(context.commit('updateSitesList', json)));
  },
  checkIfLoggedWithToken(context) {
    let tokenInLocalStorage = localStorage.getItem('loginToken');
    console.log(tokenInLocalStorage);
    if (tokenInLocalStorage) {
      console.log(123);
      Vue.http.post('http://localhost:3003/token-login', { token: JSON.parse(tokenInLocalStorage) })
        .then(res => res.json())
        .then(json => { console.log('json.user', json.user); context.commit('updateCurrUser', json.user) })
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
  getCurrUserID: (state) => { return state.id },
  getCurrUser: (state) => { return state.username },
  getSiteIds: (state) => { return state.siteIDs },
  getSitesList: (state) => { return state.sitesList }
};

export default {
  state,
  getters,
  actions,
  mutations
}
