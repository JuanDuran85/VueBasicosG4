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
  :root {
    --primary: #da6522;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
  }
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
</style>
