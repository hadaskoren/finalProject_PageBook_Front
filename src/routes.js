import VueRouter from 'vue-router';

import SiteCenter from './components/site-center';
import Editor from './components/editor';
import Login from './components/login';


// import Signin from './components/signin';
// import Signup from './components/signup';
// import Shop from './components/shop';
// import Cart from './components/cart';
// import Admin from './components/admin/admin';

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


{ path: '*', redirect: { name: 'home' } }];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router