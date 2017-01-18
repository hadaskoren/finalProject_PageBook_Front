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
    comps: []
};

const mutations = {
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
        console.log('state.comps', state.comps);
        state.comps.splice(compSelectedInterface.idx, 0, compSelectedInterface)
    },
    [types.SHOW_COMP_ADD_BTNS](state, comp) {
        comp.showAddCompButton = !comp.showAddCompButton;
    },
    [types.DELETE_COMP](state, compIdx) {
        state.comps.splice(compIdx, 1);
    },
    [types.SAVE_PROP_TEXT](state, compData) {
        state.comps[compData.compIndex].props[compData.refName] = compData.htmlText;
        console.log('state.comps',state.comps);
    },
    [types.EDITABLE_FALSE](state) {
        state.isEditable = false;
        console.log('state.isEditable = false',state.isEditable);
    },
    [types.MAKE_EDITABLE](state) {
        state.isEditable = true;
        console.log('state.isEditable = true',state.isEditable);
    }
}

const actions = {
   
    getSite(context, siteId) {
        console.log(siteId);
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
        console.log('siteToSave', siteToSave);
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
        console.log('In action');
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
    }
};

const getters = {
    getComps: (state) => { return state.comps },
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