import VueRouter from 'vue-router';

import SiteCenter from './components/site-center';
import Editor from './components/editor';
import Login from './components/login';
import Home from './components/home';
import UserDashboard from './components/user-dashboard';
import Preview from './components/page-preview';
import Signup from './components/signup';

const routes = [{
  path: '/',
  name: 'site-center',
  component: SiteCenter
},
{
  path: '/user-dashboard/:id',
  name: 'user-dashboard',
  component: UserDashboard
},
{
  path: '/signup',
  name: 'signup',
  component: Signup
},
{
  path: '/home',
  name: 'home',
  component: Home
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
{
  path: '/preview',
  name: 'preview',
  component: Preview
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