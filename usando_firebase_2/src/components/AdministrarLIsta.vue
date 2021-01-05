<template>
    <div>
        <h2>Administra tus Opiniones</h2>
        <div v-if="enviandoOpiniones.length > 0">
            <b-table striped hover :items="item" :fields="fields">
                <template #cell(#)="data">
                    {{ data.index + 1 }}
                </template>
                <template #cell(acciones)>
                    <b-button size="sm" class="mr-1">Editar</b-button>
                    <b-button size="sm">Eliminar</b-button>
                </template>
            </b-table>
        </div>

        <div class="mt-4" v-if="enviandoOpiniones.length > 0">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Opinión</th>
                        <th>Titulo de Pelicula</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in enviandoOpiniones" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.nombre}}</td>
                        <td>{{item.opinion}}</td>
                        <td>{{item.titulo}}</td>
                        <td><b-button>Editar</b-button></td>
                        <td><b-button variant="danger" @click="eliminado(item)">Eliminar</b-button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <b-alert show>No existen opiniones</b-alert>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'AdministrarLista',
    data() {
        return {
            fields: ['#','nombre', 'opinion', {key: 'titulo', label: 'Titulo de Pelicula'}, 'Acciones'],
            item: []
        }
    },
    created(){
        this.$store.dispatch('cargandoOpiniones');
    },
    mounted() {
        this.item = this.enviandoOpiniones;
    },
    computed: {
        ...mapGetters(['enviandoOpiniones'])
    },
    methods: {
        eliminado(item){
            this.$store.dispatch('eliminarOpinion', item).then(()=>{
                console.log('eliminado');
            });
            this.$store.dispatch('borrandoOpinionLocal',item);
        }
    }
}
</script>

<style>

</style>