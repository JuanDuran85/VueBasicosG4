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
    // este metodo permite supervisar la conexion de los usuarios (si entran o salen de sesión)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('user',user); // si entra se envia la inforamcion del usuario a la store
      } else {
        console.log("cierre de sesion");
        this.$store.dispatch('user',null); //si sale, se borra la informacion de la store
      }
    });
    this.$store.dispatch('traerDatosCursos');
  },
}
</script>

<style lang="scss">

</style>
