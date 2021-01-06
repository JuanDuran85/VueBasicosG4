<template>
  <div>
    <div>
      <TheNavBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    TheNavBar,
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('dataUser', user);
      } else {
        this.$store.dispatch('dataUser', null);
      }
    });
    this.$store.dispatch('traerPeliculas');
  },
}
</script>
 
<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
</style>
