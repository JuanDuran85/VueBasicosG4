<template>
  <b-container class="my-5">
    <b-row>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4" v-for="(peli,index) in enviarPeliculas.results" :key="index">
        <b-card :title="peli.title" :img-src="`https://image.tmdb.org/t/p/w500${peli.poster_path}`" :img-alt="peli.title" img-top tag="article" class="mb-2">
          <b-card-text>
            {{peli.overview | recorte}}
          </b-card-text>
          <b-button href="#" variant="primary" @click="$bvModal.show('modal-scrollable-'+index)">Ver más</b-button>
          <b-button href="#" variant="info" class="mx-3">Opinar</b-button>
        </b-card>

        <!-- modal para ver mas -->
        <b-modal :id="'modal-scrollable-'+index" scrollable :title="peli.title">
          <p class="my-4 text-justify">
            {{peli.overview}}
          </p>
          <template #modal-cancel>
            <span>Cerrar</span>
          </template>
          <template #modal-ok>
            <span @click="cerrar">Favoritos</span>
          </template>
        </b-modal>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ListaPeliculas',
  data() {
    return {
      
    }
  },
  methods: {
    cerrar(){
      console.log("cerrando ventana")
    }
  },
  computed: {
    ...mapGetters(['enviarPeliculas'])
  },
  filters: {
    recorte(texto){
      return texto.substring(0,47).concat("...");
    }
  }
}
</script>

<style scoped lang="scss">

</style>
