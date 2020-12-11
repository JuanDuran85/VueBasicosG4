<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar },
  name: 'App',
  created() {
    this.$store.dispatch('llamadoAPI');
  },
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
