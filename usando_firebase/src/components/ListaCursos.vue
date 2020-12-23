<template>
  <div class="my-5 container">
    <div v-if="enviandoUser">
      <h1 class="text-center">Bienvenido</h1>
      <div class="card">
        <img :src="enviandoUser.photoURL" class="card-img-top" :alt="enviandoUser.displayName">
        <div class="card-body">
          <h5 class="card-title">Nombre de Usuario: {{enviandoUser.displayName}}</h5>
          <p class="card-text">Correo Electrónico{{enviandoUser.email}}.</p>
          <a href="#" class="btn btn-primary" @click="verificandoEmail">Enviar Verificación</a>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-else>
      No hay usuario en sesión.
    </div>
    <div class="my-5">
      <h3>Información de la API</h3>
      <div class="card">
        <img :src="enviandoAPI.image" class="card-img-top" alt="imagen">
        <div class="card-body">
          <h5 class="card-title">Respuesta: {{enviandoAPI.answer}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import firebase from 'firebase';
import { mapGetters } from "vuex";

export default {
  name: 'ListaCursos',
  computed: {
    ...mapGetters(['enviandoUser', 'enviandoAPI']),
  },
  methods: {
    verificandoEmail(){
      //firebase.auth().currentUser;
      if (!this.enviandoUser.emailVerified) {
        this.enviandoUser.sendEmailVerification().then(() => {
          console.log("Correo enviado");
        }).catch((error) => {
          console.error(error)
        }); 
      } else {
        console.log("El Correo ya esta verificado");
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
