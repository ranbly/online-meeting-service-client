<!-- 최상위 컴포넌트 -->
<template>
    <div id="app">
        <app-nav></app-nav>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import AppNav from './components/AppNav.vue'
  import VueParticles from '../node_modules/vue-particles/src/vue-particles/vue-particles'
  import AppFooter from './components/Footer.vue'
  import About from './components/About.vue'

  const firebase = require('firebase')
  const config = {
    apiKey: '<API_KEY>',
    authDomain: '<PROJECT_ID>.firebaseapp.com',
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
    storageBucket: '<BUCKET>.appspot.com'
  }

  firebase.initializeApp(config)

  export default {
    name: 'app',
    components: {
      AppFooter,
      VueParticles,
      AppNav,
      About
    }
  }
</script>

<style lang="scss">
    @import "assets/common.scss";
</style>
