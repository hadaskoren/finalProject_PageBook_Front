import VueRouter from 'vue-router';

import Editor from './components/editor';
import Preview from './components/page-preview';
import Production from './components/page-production';
import Login from './components/login';
import Home from './components/home';
import UserDashboard from './components/user-dashboard';
import Signup from './components/signup';

const routes = [{
  path: '/',
  name: 'home',
  component: Home
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
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/editor/site/:id',
  name: 'editor',
  component: Editor
},
{
  path: '/preview/site/:id',
  name: 'preview',
  component: Preview
},
{
  path: '/prod/site/:id',
  name: 'prod',
  component: Production
},
{   
  path: '*', 
  redirect: { name: 'home' } 
}];

const router = new VueRouter({
  mode: 'history',
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
});

export default router