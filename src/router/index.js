import Vue from 'vue'
import Router from 'vue-router'
import Channel from '@/components/Channel'
import Main from '@/components/Main'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/channel/:channel_id',
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

