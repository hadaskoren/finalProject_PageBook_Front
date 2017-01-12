export const ADD_COMP = 'currSite/ADD_COMP';

const headerTemlateCompInterface = {
    name: '',
    type: '',
    props: [{
        h1_text_1: 'Hi, I\'m ',
        h1_text_2_strong: 'Photon',
        h1_text_3: ', another fine',
        h1_a_href: 'http://html5up.net',
        h1_a_text: 'HTML5 UP',
        p_text_1: 'Accumsan feugiat mi commodo erat lorem ipsum, sed magna',
        p_text_2: 'lobortis feugiat sapien sed etiam volutpat accumsan.',
        li_a_text: 'Discover'
    }]
}


const state = {
  id:'',
  siteName: '',
  url: '',
  isPublished: false,
  comps: [ {
      id: '',
      name:'',
      type: 'header-template',
      props: {
        h1_text_1: 'Hi, I\'m ',
        h1_text_2_strong: 'Photon',
        h1_text_3: ', another fine',
        h1_a_href: 'http://html5up.net',
        h1_a_text: 'HTML5 UP',
        p_text_1: 'Accumsan feugiat mi commodo erat lorem ipsum, sed magna',
        p_text_2: 'lobortis feugiat sapien sed etiam volutpat accumsan.',
        li_a_text: 'Discover'
    }
  }]
};

const mutations = {
    [ADD_COMP](state) {
      console.log('IN MUTATION');
      var headerTemlateCompInterface2 = (JSON.parse(JSON.stringify(headerTemlateCompInterface)));
      console.log(headerTemlateCompInterface2);
      state.comps.push(headerTemlateCompInterface2);
      console.log(state.comps);
  }
}

const actions = {};

const getters = {
    getComps: (state) => {return state.comps}
};

export default {
  state,
  getters,
  actions,
  mutations
}