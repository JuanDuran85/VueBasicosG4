<template>
    <div class="container my-5">
        <h2>Administrando Cursos</h2>
        <div class="my-4">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Curso</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Escuela</th>
                    <th>Completo</th>
                    <th>Favorito</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in enviandoCursos" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.escuela}}</td>
                    <td>{{item.completado ? 'Si' : 'No'}}</td>
                    <td>{{item.favorito ? 'Si' : 'No'}}</td>
                    <td><button type="button" class="btn btn-info" @click="editandoCurso(item.idDoc)">Editar</button></td>
                    <td><button type="button" class="btn btn-danger" @click="eliminando(item.idDoc)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>

        <!-- modal para agregar cursos -->
        <div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agregando Curso</h5>
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
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Administracion',
    data() {
        return {
            nombre: '',
            duracion: '',
            urlImagen: '',
            escuela: ''
        }
    },
    computed: {
        ...mapGetters(['enviandoCursos'])
    },
    methods: {
        agregandoCurso(){
            if (this.nombre.length >= 4 && this.duracion && this.urlImagen && this.escuela) {
                let datos = {
                    nombre: this.nombre,
                    duracion: this.duracion,
                    urlImagen: this.urlImagen,
                    escuela: this.escuela
                };
                this.$store.dispatch('agregandoCurso',datos);
            } else {
                console.log("No se puede agregar curso");
            }
        },
        eliminando(id){
            this.$store.dispatch('borrandoCurso',id);
        },
        editandoCurso(idDoc){
            this.$router.push({name: 'Editando', params: {id: idDoc}});
        }
    },
}
</script>

<style>

</style>