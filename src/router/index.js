import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://localhost:4000')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
