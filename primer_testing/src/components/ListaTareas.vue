<template>
    <div class="container my-5">
        <h2 class="my-5">Lista de Actividades <font-awesome-icon icon="tasks"></font-awesome-icon></h2>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarea</th>
                        <th>Estado</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in enviarActividades" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.task}}</td>
                        <td><button type="button" class="btn" :class="[item.realizada ? 'btn-success' : 'btn-warning']" @click="modificarEstado(index)"><font-awesome-icon :icon="item.realizada ? 'check' : 'business-time'"/> {{item.realizada ? 'Finalizada' : 'Pendiente'}}</button></td>
                        <td><button type="button" class="btn btn-danger" @click="eliminandoTarea(index)"><font-awesome-icon icon="trash-alt"></font-awesome-icon> Eliminar</button></td>
                        <td><button type="button" class="btn btn-info"><font-awesome-icon icon="edit"/> Editar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: 'ListaTareas',
    computed: {
        ...mapGetters(['enviarActividades'])
    },
    methods: {
        ...mapActions(['eliminandoTarea', 'modificarEstado'])
    },
}
</script>

<style>

</style>