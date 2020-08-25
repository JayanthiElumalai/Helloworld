<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import nav from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    'Navigation':nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
