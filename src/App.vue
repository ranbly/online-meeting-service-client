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
  import AppFooter from './components/Footer'
  export default {
    name: 'app',
    components: {
      AppFooter,
      VueParticles,
      AppNav
    }
  }
</script>

<style lang="scss">
    @import "assets/common.scss";
</style>
