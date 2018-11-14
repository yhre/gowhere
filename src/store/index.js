import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  // state: {
  //   city: '上海'
  // },
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCityAction', city)
  //   }
  // },
  // mutations: {
  //   changeCityAction (state, city) {
  //     state.city = city
  //   }
  // }
   mutations: mutations
})
