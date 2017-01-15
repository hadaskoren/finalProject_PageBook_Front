import VueRouter from 'vue-router';

import SiteCenter from './components/site-center';
import Editor from './components/editor';
import Login from './components/login';

const routes = [{
  path: '/',
  name: 'site-center',
  component: SiteCenter
},
{
  path: '/editor',
  name: 'editor',
  component: Editor
},
{
  path: '/login',
  name: 'login',
  component: Login
},

//  {
//   path: '/signin',
//   name: 'signin',
//   component: Signin
// },


{   
  path: '*', 
  redirect: { name: 'home' } 
}];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router