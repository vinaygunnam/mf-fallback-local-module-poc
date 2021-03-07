<template>
  <div id="app">
    <AppHeader title="Welcome to the app"/>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import AppHeader from './components/CrazyHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
