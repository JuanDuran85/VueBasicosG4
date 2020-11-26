<template>
  <div>
    <NavBar />
    <Main/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Main
  }
}
</script>

<style>

</style>
