<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    this.$store.dispatch('infoApi');
  },
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
