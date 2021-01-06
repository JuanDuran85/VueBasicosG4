<template>
  <b-container class="my-5">
    <h1 class="text-center my-5">Lista de Peliculas</h1>
    <b-row>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4" v-for="(peli,index) in enviarPeliculas.results" :key="index">
        <b-card :title="peli.title" :img-src="`https://image.tmdb.org/t/p/w500${peli.poster_path}`" :img-alt="peli.title" img-top tag="article" class="mb-2">
          <b-card-text>
            {{peli.overview | recorte}}
          </b-card-text>
          <div v-if="enviandoUser">
            <b-button href="#" variant="primary" @click="$bvModal.show('modal-scrollable-'+index)" :data-cy="'verMas'+index">Ver más</b-button>
            <b-button href="#" variant="info" class="mx-3" @click="$bvModal.show('modal-opiniones-'+index)">Opinar</b-button>
          </div>
          <div v-else>
            <b-button href="#" variant="info" class="mx-3" @click="$router.push({name: 'Login'})">Ir a Login</b-button>
          </div>
        </b-card>

        <!-- modal para ver mas -->
        <b-modal :id="'modal-scrollable-'+index" scrollable :title="peli.title">
          <div>
            <b-img :src="`https://image.tmdb.org/t/p/w500${peli.poster_path}`" fluid alt="Responsive image"></b-img>
          </div>
          <p class="mt-4">Fecha de estreno: {{peli.release_date}}</p>
          <p class="my-4 text-justify"> Descripción: 
            {{peli.overview}}
          </p>
          <template #modal-cancel>
            <span>Cerrar</span>
          </template>
          <template #modal-ok>
            <span @click="agregarFav(peli)" data-cy="agregarFav">Favoritos</span>
          </template>
        </b-modal>

        <!-- modal para opiniones -->
        <b-modal :id="'modal-opiniones-'+index" scrollable :title="peli.title">
          <div>
            <!-- traer la inforemacion del usuario (nombre) -->
            <div class="mt-3">
              <b-form-input v-model="nombre" disabled></b-form-input>
            </div>
            <!-- crear los vmodel para el nombre y la opinion en la data -->
            <div class="mt-3">
              <b-form-textarea id="textarea" v-model="opinionUser" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
            </div>
            <!-- agregar los inputs para nombre (desactivado) y opinion (textarea) -->
            <!-- crear metodo para opinion -->
            <!-- en el metodo de opinion, validar que exista opinion -->
            <!-- en el metodo de opinion, crear objeto con: "opinion, nombre, pelicula. fecha" -->
            <!-- en el metodo de opinion, crear dispatch con el objeto a la store y comunicar con firebase -->
            <!-- en la store, comunicar con firebase para agregar la opinion -->
          </div>
          <template #modal-cancel>
            <span>Cerrar</span>
          </template>
          <template #modal-ok>
            <span @click="agregarOpinion(peli)">Opinar</span>
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
      nombre: '',
      opinionUser: ''
    }
  },
  mounted() {
    this.nombre = this.enviandoUser.displayName;
    this.$store.dispatch('traerFavPelis');
  },
  methods: {
    agregarOpinion(peli){
      if (this.opinionUser) {
        let objOpinion = {
          nombre: this.nombre,
          opinion: this.opinionUser,
          fecha: new Date(),
          titulo: peli.title,
          idPeli: peli.id
        };
        this.$store.dispatch('creandoOpinion',objOpinion);
        this.opinionUser = "";
      } else {
        this.$notify.error({
          title: 'Error',
          message: 'No se puede aggregar la opinión'
        });
      }
    },
    agregarFav(peli){
      this.$store.dispatch('agregandoFavDb',peli).then((result)=>{
        if (result.message) {
          this.$notify.error({
            title: 'Error',
            message: result.message
          });
        } else {
          this.$notify({
            title: 'Success',
            message: 'Agregado a Favoritos',
            type: 'success'
          });
        }

      }).catch(() => {
        this.$notify.error({
          title: 'Error',
          message: 'Error al agregar a Favoritos'
        });
      });
    }
  },
  computed: {
    ...mapGetters(['enviarPeliculas','enviandoUser'])
  },
  filters: {
    recorte(texto){
      return texto.substring(0,47).concat("...");
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
