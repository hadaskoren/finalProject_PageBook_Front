export const ADD_CONTACT = 'contact/ADD_CONTACT';

const state = {
//   isLoggedIn: !!localStorage.getItem('token'),
//   contact: JSON.parse(localStorage.getItem('user'))
};

const mutations = {
  [ADD_CONTACT]( state ) {
      console.log('Adir is mad!');
    // state.isLoggedIn = false;
  }
}

const actions = {};
const getters = {
//   isLoggedIn: state => state.isLoggedIn,
//   user: state => state.user
};

export default {
  state,
  getters,
  actions,
  mutations
}
