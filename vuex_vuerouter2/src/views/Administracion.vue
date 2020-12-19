<template>
    <div class="container my-5">
        <div v-if="enviandoComentarios.length > 0">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Juego</th>
                        <th>Nombre de la Persona</th>
                        <th>Comentario</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in enviandoComentarios" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.nombreJuego}}</td>
                        <td>{{item.nombre}}</td>
                        <td>{{item.comentario}}</td>
                        <td><button type="button" class="btn btn-warning" @click="editandoComentario(item.idJuego)">Editar</button></td>
                        <td><button type="button" class="btn btn-danger" @click="eliminandoComent(index)">Eliminar</button></td>
                    </tr>
                </tbody>
                </table>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                No existen datos por administrar...
                <button type="button" class="btn btn-primary" @click="$router.go(-1)">Ir atras</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from 'sweetalert2';

export default {
    name: 'Administracion',
    computed: {
        ...mapGetters(['enviandoComentarios'])
    },
    methods: {
        eliminandoComent(index){
            Swal.fire({
                title: '¿Quieres eliminar el comentario?',
                text: "No hay vulta atras...",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, borralo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'El comentario Fue borrado.',
                        'success'
                    )
                    this.$store.dispatch('deleteComent',index);
                }
            })
        },
        editandoComentario(idJuego){
            this.$router.push({name: 'Editar', params: {id: idJuego}});
        }
    },
}
</script>

<style>

</style>