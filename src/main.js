// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// library import section
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import vmodal from 'vue-js-modal'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(vmodal)
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

