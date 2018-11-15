import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import City from '@/page/city/City'
import Detail from '@/page/detail/Detail'
import Citycopy from '@/page/citycopy/Citycopy'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/citycopy',
      name: 'citycopy',
      component: Citycopy
    },

    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }

})
