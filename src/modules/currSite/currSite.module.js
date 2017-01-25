import Vue from 'vue';
import { Interfaces } from '../../interfaces/interfaces';
import * as types from '../../mutation-types/mutation-types'
import router from '../../routes';

const state = {
    
    id: '',
    siteName: '',
    url: '',
    isPublished: false,
    isEditable: false,
    comps: [],
    flag: true,
    currCompIndex: '',
    currPropName: ''
};

const mutations = {
    swapComps(state, compsToSwap) {
        state.flag = !state.flag;
        const index1 = compsToSwap.first;
        const index2 = compsToSwap.second
        console.log(index1, index2);
        console.log(state.comps)
        
        let comp1 = state.comps[index1];
        let comp2 = state.comps[index2];
        state.comps[index1] = comp2;
        state.comps[index2] = comp1;

    },
    updateCurrSite(state, site) {
        state.id = site._id;
        state.isPublished = site.isPublished;
        state.siteName = site.siteName;
        state.url = site.url;
        state.comps = site.comps;
    },
    updateComps(state, value) {
        
    },
    [types.ADD_COMP](state, compSelectedInterface) {
        state.comps.splice(compSelectedInterface.idx, 0, compSelectedInterface)
    },
    [types.SHOW_COMP_ADD_BTNS](state, comp) {
        comp.showAddCompButton = !comp.showAddCompButton;
    },
    [types.DELETE_COMP](state, compIdx) {
        state.comps.splice(compIdx, 1);
    },
    [types.SAVE_PROP_TEXT](state, compData) {
        state.currCompIndex = compData.compIndex;
        state.currPropName = compData.refName;
        state.comps[state.currCompIndex].props[state.currPropName] = compData.htmlText;
    },
    [types.EDITABLE_FALSE](state) {
        state.isEditable = false;
    },
    [types.MAKE_EDITABLE](state) {
        state.isEditable = true;
    },
    [types.INCREASE_FONT_SIZE](state) {
        console.log('mutation increase');
        // console.log('state.comps[state.currCompIndex].props[state.currPropName][style]',state.comps[state.currCompIndex].props[state.currPropName][style]);
        // state.comps[state.currCompIndex].props[state.currPropName][style].size += 5;  
    }
}

const actions = {
   
    getSite(context, siteId) {
        Vue.http.get(`data/sites/${siteId}`)
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
        Vue.http.put(`data/sites/${context.state.id}`, siteToSave)
            .then(res => res.json())
            .then(json => {
                toastr.options.timeOut = 1200;
                toastr.success('Saved Successfully')
            });
    },
    addComp(context, selectedComp) {
        var compSelectedInterface = (JSON.parse(JSON.stringify(Interfaces[selectedComp.comp.type])));
        compSelectedInterface.idx = selectedComp.idx + 1;
        // Hide add buttons
        context.getters.getComps.forEach(comp => {
            if (comp.showAddCompButton) {
                context.commit(types.SHOW_COMP_ADD_BTNS, comp);
            }
        });
        context.commit(types.ADD_COMP, compSelectedInterface);
    },
    showCompBtns(context, compIdx) {
        var currComp = context.getters.getComps.find((comp, i) => {
            return i === compIdx;
        });
        context.commit(types.SHOW_COMP_ADD_BTNS, currComp);
    },
    saveCompProp({commit}, compData) {
        commit(types.SAVE_PROP_TEXT,compData);
    },
    editableFalse({commit}) {
        commit(types.EDITABLE_FALSE);
    },
    makeEditable({commit}) {
        commit(types.MAKE_EDITABLE);
    },
    // newSite({commit}) {
    //     commit(types.MAKE_EDITABLE);
    // },
    newSite(context, site) {
        const userInfo = {
            id: context.getters.getCurrUserID,
            sitesIds: context.getters.getSiteIds
        }
        Vue.http.post('newsite', {site, userInfo})
            .then(res => res.json())
            .then(json => {
                toastr.options.timeOut = 1200;
                toastr.success('Site '+ site.siteName+' was successfully created!');
                context.commit('updateCurrSite',site);
                context.commit('addSiteIdToCurrUser', json._id);
                router.push(`/editor/site/${json._id}`);
            });  
    },
    increaseFontSize(context) {
        console.log('action increase');
        context.commit(types.INCREASE_FONT_SIZE);
    }
};

const getters = {
    getComps: (state) => { console.log(state.flag); return state.comps },
    getIsEditable: (state) => { return state.isEditable},
    getCurrSiteId: (state) => {return state.id},
    getSiteName: (state) => {return state.siteName}
};

export default {
    state,
    getters,
    actions,
    mutations
}