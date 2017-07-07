import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'

import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://localhost:4000')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/channel',
      name: 'live_drawing_room',
      component: Hello
    },
    { path: '/main', name: 'main', component: Main
    }
  ]
})

