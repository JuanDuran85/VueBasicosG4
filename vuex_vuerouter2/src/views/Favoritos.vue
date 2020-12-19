<template>
  <div class="container my-5">
    <div v-if="enviandoFavoritos.length > 0">
      <h1 class="text-center my-5">Juegos Favoritos</h1>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(juego,index) in enviandoFavoritos" :key="index">
          <div class="card">
            <img :src="juego.background_image" class="card-img-top imgCard" :alt="juego.id">
            <div class="card-body">
              <h5 class="card-title">{{juego.name}}</h5>
              <p class="card-text">Tipo: {{juego.genres[0].name}}</p>
              <div class="text-center">
                <button type="button" class="btn btn-primary" @click="eliminarFav(index)">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-danger" role="alert">
        No existen favoritos por mostrar...
        <button type="button" class="btn btn-primary" @click="$router.go(-1)">Ir atras</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Favoritos',
  computed: {
    ...mapGetters(['enviandoFavoritos'])   
  },
  methods: {
    eliminarFav(index){
      this.$store.dispatch('borrarFav', index);
    }
  },
}
</script>

<style>

</style>