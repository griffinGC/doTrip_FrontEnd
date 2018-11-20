import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component:() => import("./components/mainpage/Mainpage")
      
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: () => import("./components/calendar/Calendar")
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import("./components/Setting")
      
    },
    {
      path: '/about',
      name: 'About',
      component: () => import("./components/About")
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
