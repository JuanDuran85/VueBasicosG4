<template>
  <div id="app">
    <div id="nav">
      <NavBar />
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
  }
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
