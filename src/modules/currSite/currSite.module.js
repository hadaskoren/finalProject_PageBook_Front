import {Interfaces} from '../../interfaces/interfaces';
import * as types from '../../mutation-types/mutation-types'

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
};

const actions = {
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