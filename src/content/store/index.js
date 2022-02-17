import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  // namespaced: true,
  state,
  mutations,
  actions
})
