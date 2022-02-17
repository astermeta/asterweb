import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import router from './router'
import ToggleButton from 'vue-js-toggle-button'
import VTooltip from 'v-tooltip'
import Web3 from 'web3'
import '@/assets/scss/style.scss'
import ViewUI from 'iview'
import 'iview/dist/styles/iview.css'
import 'iview/dist/iview.min.js'
import 'view-design/dist/styles/iview.css'
import 'view-design/dist/iview.min.js'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.use(ViewUI)
Vue.use(ToggleButton)
Vue.use(VTooltip)
Vue.config.productionTip = false
Vue.prototype.Web3 = Web3

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
