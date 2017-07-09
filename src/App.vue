<!-- 최상위 컴포넌트 -->
<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppNav from './components/AppNav.vue'
  export default {
    name: 'app',
    components: {
      AppNav
    }
  }
</script>

<style lang="scss">
  @import url(assets/variable.scss);

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  // margin
  @mixin margin-top($pixel){
    .margin-top-#{$pixel} {
      margin-top: $pixel+px  !important;
    }
  }
  @mixin margin-left($pixel){
    .margin-left-#{$pixel} {
      margin-left: $pixel+px  !important;
    }
  }
  @mixin margin-right($pixel){
    .margin-right-#{$pixel} {
      margin-right: $pixel+px  !important;
    }
  }
  @mixin margin-bottom($pixel){
    .margin-bottom-#{$pixel} {
      margin-bottom: $pixel+px  !important;
    }
  }
  @mixin make-margin($i: 0) {
    @for $i from 0 through 21 {
      @include margin-top($i * 5);
      @include margin-bottom($i * 5);
      @include margin-left($i * 5);
      @include margin-right($i * 5);
    }
  }

  @include make-margin();


  // padding
  @mixin padding-top($pixel){
    .padding-top-#{$pixel} {
      padding-top: $pixel+px  !important;
    }
  }
  @mixin padding-left($pixel){
    .padding-left-#{$pixel} {
      padding-left: $pixel+px  !important;
    }
  }
  @mixin padding-right($pixel){
    .padding-right-#{$pixel} {
      padding-right: $pixel+px  !important;
    }
  }
  @mixin padding-bottom($pixel){
    .padding-bottom-#{$pixel} {
      padding-bottom: $pixel+px  !important;
    }
  }
  @mixin make-padding($i: 0) {
    @for $i from 0 through 21 {
      @include padding-top($i * 5);
      @include padding-bottom($i * 5);
      @include padding-left($i * 5);
      @include padding-right($i * 5);
    }
  }

  @include make-padding();


  //width & height
  @mixin width($pixel) {
    .width-#{$pixel} {
      width: $pixel+px !important;
    }
  }

  @mixin height($pixel) {
    .height-#{$pixel} {
      height: $pixel+px !important;
    }
  }

  @mixin make-width-height($i: 0) {
    @for $i from 0 through 100 {
      @include width($i * 5);
      @include height($i * 5);
    }
  }




  //text-align
  .text-center{
    text-align: center;
  }
  .text-left{
    text-align: left
  }
  .text-right{
    text-align: right;
  }
  .text-justify{
    text-align: justify;
  }


  //h1~h6
  .h1 {
    font-size: 35px;
  }


  //text weight
  .NGL {
    font-weight: 300 !important;
  }
  .NGR {
    font-weight: 500 !important;
  }
  .NGB {
    font-weight: 700 !important;
  }


  //container

</style>
