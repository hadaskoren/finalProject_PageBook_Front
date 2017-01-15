
import Vue from 'vue';
import {Interfaces} from '../../interfaces/interfaces';
import * as types from '../../mutation-types/mutation-types'
import router from '../../routes';


const state = {
    id: '',
    siteName: '',
    url: '',
    isPublished: false,
    comps: [

        JSON.parse(JSON.stringify(Interfaces['header-template'])),
        JSON.parse(JSON.stringify(Interfaces['pic-text-template'])),
        JSON.parse(JSON.stringify(Interfaces['icon-list-template'])),
        JSON.parse(JSON.stringify(Interfaces['pic-list-template']))
    ]
};

const mutations = {

    updateCurrSite(state, site) {
        //   console.log(state);
        state.id = site._id;
        state.isPublished = site.isPublished;
        state.siteName = site.siteName;
        state.url = site.url;
        state.comps = site.comps;
        console.log(site);
        router.push('/editor');
        
    },
     [types.ADD_COMP](state, compSelectedInterface) {
        console.log('state.comps',state.comps);
        state.comps.splice(compSelectedInterface.idx,0,compSelectedInterface)
    },
    [types.SHOW_COMP_ADD_BTNS](state,comp) {
        comp.showAddCompButton = !comp.showAddCompButton;
    },
    [types.DELETE_COMP](state,compIdx) {
        state.comps.splice(compIdx,1);
    }
}

const actions = {
    getSite(context, siteId) {
        console.log(siteId);
        Vue.http.get(`http://localhost:3003/data/sites/${siteId}`)
            .then(res => res.json())
            .then(json => { context.commit('updateCurrSite', json) })
        // .then(res => context.dispatch('getSite', context.state.siteIDs[0]));
    },
    saveCurrSite(context) {
        const siteToSave = {
            _id: context.state.id,
            isPublished: context.state.isPublished,
            siteName: context.state.siteName,
            url: context.state.url,
            comps: context.state.comps
        }

        console.log('siteToSave', siteToSave);
        Vue.http.put(`http://localhost:3003/data/sites/${context.state.id}`, siteToSave)
        .then(res => res.json())
        .then(json => console.log(json))
    },
   
    addComp(context,selectedComp){
        var compSelectedInterface = (JSON.parse(JSON.stringify(Interfaces[selectedComp.comp.type])));
        compSelectedInterface.idx = selectedComp.idx+1;
        // Hide add buttons
        context.getters.getComps.forEach(comp => {
            if(comp.showAddCompButton === true) {
                context.commit(types.SHOW_COMP_ADD_BTNS, comp);
            }
        });
        context.commit(types.ADD_COMP, compSelectedInterface);
    },
    showCompBtns(context,compIdx) {
        var currComp = context.getters.getComps.find((comp,i)=>{
            return i === compIdx;
        });
        context.commit(types.SHOW_COMP_ADD_BTNS, currComp);
    },
};

const getters = {
    getComps: (state) => { return state.comps }
};

export default {
    state,
    getters,
    actions,
    mutations
}