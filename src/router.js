import Vue from 'vue'
import Router from 'vue-router'
import Nav from "./components/Nav"



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: "/login",
      name: 'default'
    },
    {
      path: '/Plan',
      name: 'mainpage',
      components:{
        default: () => import("./components/mainpage/Mainpage"),
        footer : Nav
      }

    },
    {
      path: '/Calendar',
      name: 'Calendar',
      components: {
        default: () => import("./components/calendar/Calendar"),
        footer: Nav
      }
      

    },
    {
      path: '/Calendar/:id',
      name: 'Schedule',
      components: {
        default: () => import("./components/calendar/Schedule"),
        footer: Nav
      }
    },
    {
      path: '/Calendar/:id/:num',
      name: 'Actions',
      components: {
        default: () => import("./components/calendar/Actions"),
        footer: Nav
      }
    },
    {
      path: '/logout',
      redirect: "/login",
      name: 'Logout'
    },
    {
      path: '/About',
      name: 'About',
      components: {
        default: () => import("./components/About"),
        footer: Nav
      }
      
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
      path : '/Signup',
      name : 'Signup',
      component: () => import("./components/auth/Signup")
    }
  ]
})
