import Vue from 'vue'
import Router from 'vue-router'
import Channel from '@/components/Channel'
import Main from '@/components/Main'
import About from '@/components/About'

import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://localhost:4000')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/channel/:key',
      name: 'live_drawing_room',
      component: Channel
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

