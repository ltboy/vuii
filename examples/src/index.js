import Vue from 'vue'
import router from './router/index.js'
import App from './app.vue'
import Vuii from '../../src/index'
import '../../packages/theme/src/index.scss'

Vue.config.productionTip = false

Vue.use(Vuii)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
