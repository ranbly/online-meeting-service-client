<!-- 최상위 컴포넌트 -->
<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
    <!--<app-footer></app-footer>-->
  </div>
</template>

<script>
  import store from './vuex/store'
  import AppNav from './components/AppNav.vue'
  import VueParticles from '../node_modules/vue-particles/src/vue-particles/vue-particles'
  import AppFooter from './components/Footer.vue'
  import About from './components/About.vue'

  export default {
    name: 'app',
    store,
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
