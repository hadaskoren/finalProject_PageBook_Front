import VueRouter from 'vue-router';

import SiteCenter from './components/site-center';
import Signin from './components/signin';
import Signup from './components/signup';
import Shop from './components/shop';
import Cart from './components/cart';
import Admin from './components/admin/admin';

const routes = [{
  path     : '/',
  name     : 'site-center',
  component: SiteCenter
}, {
  path     : '/signin',
  name     : 'signin',
  component: Signin
},
  {
    path     : '/signup',
    name     : 'signup',
    component: Signup
  },
  {
    path     : '/shop',
    name     : 'shop',
    component: Shop
  },
  {
    path     : '/cart',
    name     : 'cart',
    component: Cart
  },
  {
    path     : '/admin',
    name     : 'admin',
    component: Admin
  },
  
  { path: '*', redirect: { name: 'home' } }];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router