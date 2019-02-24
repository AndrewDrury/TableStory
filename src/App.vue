<template>
  <div id="app">
    <!-- Dynamic Content -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@import "assets/main.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src

export default Vue.extend({
  name: "welcome"
});
</script>
