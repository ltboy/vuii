import Router from 'vue-router'
import Vue from 'vue'

import Home from '../../pages/home'
const About = () => import('../../pages/hello')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../../pages/button')
    }
  ]
})
