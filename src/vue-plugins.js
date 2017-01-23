import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueDND from 'awe-dnd'
// import { Vue2Dragula } from 'vue2-dragula'



// import Sortable from 'vue-sortable';
// import Draggable from 'vuedraggable'


// Vue.use(Sortable);
// Vue.use(Draggable);
// Vue.use(Vue2Dragula, {
//   logging: {
//     service: true
//   }
// });
Vue.use(VueDND)
Vue.use(Vuex);
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(VueResource);
