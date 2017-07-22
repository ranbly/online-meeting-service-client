<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link v-bind:to="'/main'">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
        </router-link>
        <router-link v-bind:to="'/main'">
          <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
        </router-link>
        <a class="nav-item is-tab is-hidden-mobile">Features</a>
        <a class="nav-item is-tab is-hidden-mobile">Pricing</a>
        <router-link v-bind:to="'/about'"><a class="nav-item is-tab is-hidden-mobile">About</a></router-link>
      </div>
      <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
        <a class="nav-item is-tab is-hidden-tablet">Features</a>
        <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
        <a class="nav-item is-tab is-hidden-tablet">About</a>
        <a class="nav-item is-tab">
          <figure class="image is-16x16" style="margin-right: 8px;">
            <img src="http://bulma.io/images/jgthms.png">
          </figure>
          Profile
        </a>
        <a class="nav-item is-tab">Log In</a>
      </div>
    </div>
  </nav>
</template>


<script>
  export default {
    name: 'app-nav'
  }
</script>
<style></style>
