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
  addSiteIdToCurrUser(state, id) {
    state.siteIDs.push(id);
  },
  updateCurrUser(state, user) {
   
    state.id = user._id;
    state.username = user.username;
    state.siteIDs = user.siteIds;
    state.sitesList = [];
    state.isLoggedIn = true;
    localStorage.setItem('loginToken', JSON.stringify(user.token));
    toastr.options.timeOut = 1200;
    toastr.info('Welcome ' + user.username);
    router.push(`/user-dashboard/${user.username}`);
  },
  logout(state) {
    state.isLoggedIn = false;
    localStorage.removeItem('loginToken');
    router.push('/home');
  },
  updateSitesList(state, list) {
    state.sitesList = list;
  },
  deleteSiteFromState(state, id) {
    state.siteIDs = state.siteIDs.filter(siteId => siteId !== id);
    state.sitesList = state.sitesList.filter(site => site._id !== id);
    toastr.options.timeOut = 1200;
    toastr.success('Deleted Successfully')
  }
}

const actions = {
  deleteSite(context, site) {
    const userId = context.state.id;
    const userSites = context.state.siteIDs.filter(siteId => siteId !== site._id);
    const siteToDelete = site;

    let data = {
      userId,
      userSites,
      siteToDelete
    }

    data = JSON.stringify(data);

    Vue.http.delete(`deleteSite/${site._id}`)
      .then(res => res.json())
      .then(json => {
        context.commit('deleteSiteFromState', site._id);
      });
  },
  getSitesList(context) {
    // debugger;
    if(!context.state.siteIDs.length) {
      // context.state.sitesList = []; 
      return;
    }
    Vue.http.post(`data/sites/list`, context.state.siteIDs)
      .then(res => res.json())
      .then(json => context.commit('updateSitesList', json))
      .catch(err => console.log('Couldn\'t get sites'));
  },
  checkIfLoggedWithToken(context) {
    let tokenInLocalStorage = localStorage.getItem('loginToken');
    if (tokenInLocalStorage) {
      Vue.http.post('token-login', { token: JSON.parse(tokenInLocalStorage) })
        .then(res => res.json())
        .then(json => context.commit('updateCurrUser', json.user));
    }
  },
  getUser(context, user) {
    Vue.http.post('login', user)
      .then(res => res.json())
      .then(json => context.commit('updateCurrUser', json))
      .catch(err => {
        toastr.options.timeOut = 800;
        toastr.warning('Incorrect email/password')
      });

  },
  signupUser(context, user) {
    Vue.http.post('signup', user)
      .then(res => res.json())
      .then(json => {
        console.log('signupUser resolve', json)
        // toastr.options.timeOut = 1200;
        // toastr.success('Welcome to Book Page')
        context.dispatch('getUser', json)
        // router.push('/home')
      });
  },
  saveNewUser(context, userData) {
    Vue.http.post('signup', userData)
      .then(res => res.json())
      // .then(json => console.log(json));
  },
  logout(context) {
    context.commit('logout');
  }

};

const getters = {
  getCurrUserID: (state) => { return state.id },
  getCurrUser: (state) => { return state.username },
  getSiteIds: (state) => { return state.siteIDs },
  getSitesList: (state) => { return state.sitesList },
  isLoggedIn: (state) => { return state.isLoggedIn}
};

export default {
  state,
  getters,
  actions,
  mutations
}
