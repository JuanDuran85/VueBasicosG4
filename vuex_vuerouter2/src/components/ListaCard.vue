<template>
  <div class="container my-5">
    <h2 class="text-center my-4">Información de Juegos</h2>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 my-3" v-for="(juego,index) in juegos" :key="index">
        <div class="card">
          <img :src="juego.background_image" class="card-img-top imgCard" :alt="juego.id">
          <div class="card-body">
            <h5 class="card-title">{{juego.name}}</h5>
            <p class="card-text">Tipo: {{juego.genres[0].name}}</p>
            <div class="text-center">
              <button type="button" data-toggle="modal" :data-target="'#juego-'+index" class="btn btn-primary mx-3">Ver Más</button>
              <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#comentario-'+index">Comentar</button>
            </div>
          </div>
        </div>

        <!-- Modal ver mas-->
        <div class="modal fade" :id="'juego-'+index" tabindex="-1" :aria-labelledby="'exampleModalLabel'+index" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" :id="'exampleModalLabel'+index">{{juego.name}}</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">X</button>
              </div>
              <div class="modal-body text-center">
                <h2>Video</h2>
                <video width="320" height="240" controls>
                  <source :src="juego.clip.clip">
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent.stop="agregandoFavoritos(juego)">Agregar a Favoritos</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal comentario-->
        <div class="modal fade" :id="'comentario-'+index" tabindex="-1" :aria-labelledby="'comentarioLabel'+index" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" :id="'comentarioLabel'+index">{{juego.name}}</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">X</button>
              </div>
              <div class="modal-body text-center">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                  <input type="text" class="form-control" placeholder="Ingresa tu nombre" v-model="nombre">
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
                  <textarea class="form-control" rows="3" v-model="comentario"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="agregandoComentario(juego)">Agregar Comentario</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'ListaCard',
  data() {
    return {
      nombre: '',
      comentario: ''
    }
  },
  computed: {
    juegos(){
      return this.$store.getters.enviarinfoApi;
    }
  },
  methods: {
    agregandoFavoritos(juego){
      this.$store.dispatch('agregandoJuegoFav', juego);
    },
    agregandoComentario(juego){
      if (this.nombre && this.comentario && this.nombre.length > 2) {
        let cometarioFinal = {
          nombre: this.nombre,
          comentario: this.comentario,
          nombreJuego: juego.name,
          idJuego: juego.id
        };
        this.$store.dispatch('agregandoNuevoComentario', cometarioFinal);
        this.nombre = "";
        this.comentario = "";
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
    }
  },

}
</script>

<style scoped>
  .imgCard{
    max-height: 140px;
    min-height: 140px;
  }
</style>
