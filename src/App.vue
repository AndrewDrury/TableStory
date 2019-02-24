<template>
  <div id="app">

    <b-navbar toggleable="md" type="dark" variant="dark" class="d-fixed">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">TableStory</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items, collapsed on mobile -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/welcome" right>Welcome</b-nav-item>
          <b-nav-item to="/build-profile" right>Build Profile</b-nav-item>
          <b-nav-item to="/discover-dishes" right>Discover Dishes</b-nav-item>
          <b-nav-item to="/discover-places" right>Discover Places</b-nav-item>
          <b-nav-item to="/restaurant-profile" right>Restaurant Profile</b-nav-item>
          <b-nav-item to="/other-profile" right>Other Profile</b-nav-item>
          <b-nav-item to="/my-profile" right>My Profile</b-nav-item>
          <b-nav-item to="/camera" right>Camera</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <!-- Dynamic Content -->
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<style lang="scss">
@import 'assets/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import Vue from 'vue'
 // @ is an alias to /src

export default Vue.extend({
  name: 'welcome'
})
</script>
