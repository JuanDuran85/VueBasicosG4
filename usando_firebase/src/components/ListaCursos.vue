<template>
  <div class="my-5 container">
    <div v-if="enviandoUser">
      <h1 class="text-center">Bienvenido</h1>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item, index) in enviandoCursos" :key="index">
          <div class="card">
            <img :src="item.urlImagen" class="card-img-top" :alt="item.nombre">
            <div class="card-body">
              <h5 class="card-title">Nombre de Curso: {{item.nombre}}</h5>
              <p class="card-text">Duración: {{item.duracion}}. | Escuela: {{item.escuela}}</p>
              <!-- Button trigger modal 1 -->
              <button type="button" class="btn btn-primary mx-3" data-bs-toggle="modal" :data-bs-target="'#opinion'+index">Opinar</button>
              <!-- Button trigger modal 2 -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#verMas'+index">Ver Más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-else>
      No hay usuario en sesión.
    </div>
    
    <!-- modal 1 -->
    <div>
        <!-- modal para comentar el curso -->
        <div v-for="(item, index) in enviandoCursos" :key="index">
          <div class="modal fade" :id="'opinion'+index" tabindex="-1" :aria-labelledby="'exampleModalLabel'+index" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="'exampleModalLabel'+index">Comentando a: {{item.nombre}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nombre del Curso</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" v-model="nombre">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Duración</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" v-model="duracion">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Escuela</label>
                            <input type="text" class="form-control" id="escuela" v-model="escuela">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">URL imagen</label>
                            <input type="text" class="form-control" id="imagen" v-model="urlImagen">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="agregandoCurso">Agregar</button>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>

    <!-- modal 2 -->
    <div>
      <!-- Modal para ver mas informacion -->
      <div v-for="(item, index) in enviandoCursos" :key="index">
        <div class="modal fade" :id="'verMas'+index" tabindex="-1" :aria-labelledby="'exampleModalLabel2'+index" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" :id="'exampleModalLabel2'+index">Ver más de: {{item.nombre}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                    ver mas
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="agregandoCurso">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ListaCursos',
  data() {
    return {
      nombre: '',
      urlImagen: '',
      completado: '',
      favorito: '',
      duracion: '',
      escuela: ''
    }
  },
  computed: {
    ...mapGetters(['enviandoUser', 'enviandoCursos']),
  },
  methods: {
    verificandoEmail(){
      if (!this.enviandoUser.emailVerified) {
        // este metodo se emplea para enviar el correo de verificación de cuenta de usuario
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
  img{
    max-height: 200px;
    min-height: 100px;
  }
</style>
