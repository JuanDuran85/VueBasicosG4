<template>
    <div class="container my-5">
        <h2>Administrando Pacientes</h2>
        <div class="my-4">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Paciente</button>
        </div>
        <div v-if="enviandoPacientes.length > 0">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre y Apellido</th>
                        <th>Prevision</th>
                        <th>Edad</th>
                        <th>Diagnostico</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in enviandoPacientes" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.nombre}}</td>
                        <td>{{item.prevision}}</td>
                        <td>{{item.edad}}</td>
                        <td>{{item.diagnostico}}</td>
                        <td><button type="button" class="btn btn-info" @click="editandoPaciente(item.idDoc)">Editar</button></td>
                        <td><button type="button" class="btn btn-danger" @click="eliminandoPaciente(item.idDoc)">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                No hay pacientes para mostrar
            </div>
        </div>
        <!-- modal para agregar cursos -->
        <div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Agregando Paciente</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nombre y Apellido</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" v-model="nombre">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Prevision</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" v-model="prevision">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Edad</label>
                            <input type="number" class="form-control" id="edad" v-model="edad">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Diagnostico</label>
                            <input type="text" class="form-control" id="imagen" v-model="diagnostico">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="agregandoPaciente">Agregar</button>
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
    name: 'Pacientes',
    data() {
        return {
            nombre: '',
            diagnostico: '',
            edad: '',
            prevision: ''
        }
    },
    computed: {
        ...mapGetters(['enviandoPacientes'])
    },
    methods: {
        agregandoPaciente(){
            if (this.nombre.length >= 4 && this.prevision && this.edad && this.diagnostico) {
                let datos = {
                    nombre: this.nombre,
                    edad: this.edad,
                    diagnostico: this.diagnostico,
                    prevision: this.prevision
                };
                this.$store.dispatch('agregandoPaciente',datos);
            } else {
                console.log("No se puede agregar curso");
            }
        },
        eliminandoPaciente(id){
            this.$store.dispatch('borrandoPaciente',id);
        },
        editandoPaciente(idDoc){
            this.$router.push({name: 'EditarPaciente', params: {id: idDoc}});
        }
    },
    mounted() {
        this.$store.dispatch('traerDatosPacientes');
    },
}
</script>

<style>

</style>