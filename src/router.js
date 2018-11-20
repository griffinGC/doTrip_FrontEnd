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
      path: '/Calendar/:id',
      name: 'Schedule',
      component:() => import("./components/calendar/Schedule")
      
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
      
    }
  ]
})
