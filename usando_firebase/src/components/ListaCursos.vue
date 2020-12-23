<template>
  <div class="my-5 container">
    <div v-if="enviandoUser">
      <h1 class="text-center">Bienvenido</h1>
      <div class="card">
        <img :src="enviandoUser.photoURL" class="card-img-top" :alt="enviandoUser.displayName">
        <div class="card-body">
          <h5 class="card-title">Nombre de Usuario: {{enviandoUser.displayName}}</h5>
          <p class="card-text">Correo Electrónico{{enviandoUser.email}}.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-else>
      No hay usuario en sesión.
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'ListaCursos',
  computed: {
    ...mapGetters(['enviandoUser']),
  }
}
</script>

<style scoped lang="scss">

</style>
