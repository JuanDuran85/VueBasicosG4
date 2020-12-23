<template>
  <div>
    <div>
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import firebase from 'firebase';

export default {
  components: { NavBar },
  name: 'App',
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('user',user);
      } else {
        console.log("cierre de sesion");
        this.$store.dispatch('user',null);
      }
    });
    this.$store.dispatch('llamarAPI');
  },
}
</script>

<style lang="scss">

</style>
