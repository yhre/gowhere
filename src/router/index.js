import Vue from 'vue'
import Router from 'vue-router'
import homeheader from '@/components/HomeHeader'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeheader',
      component: homeheader
    }
  ]
})
