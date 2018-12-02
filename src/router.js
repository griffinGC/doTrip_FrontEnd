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
      path: '/Calendar/:id/:num',
      name: 'Actions',
      component:() => import("./components/calendar/Actions")
    },
    {
      path: '/mypage',
      name: 'Setting',
      component: () => import("./components/Setting")

    },
    {
      path: '/about',
      name: 'About',
      component: () => import("./components/About")
    },
    {
      path : '/test',
      name : 'Test',
      component: () => import("./components/Test")
    },
    {
      path : '/login',
      name : 'Login',
      component: () => import("./components/auth/Login")
    },
    {
      path : '/signup',
      name : 'Signup',
      component: () => import("./components/auth/Signup")
    }
  ]
})
