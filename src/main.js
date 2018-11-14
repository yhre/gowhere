// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import store from './store/index'
import 'swiper/dist/css/swiper.css'
import './assets/stylus/reset.css'
import './assets/stylus/iconfont.css'
import './assets/stylus/border.css'
import router from './router'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
