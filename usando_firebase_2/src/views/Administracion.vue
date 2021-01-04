<template>
    <b-container class="my-5">
        <h2>Administra tus Opiniones</h2>
        <b-table striped hover :items="item" :fields="fields">
            <template #cell(#)="data">
                {{ data.index + 1 }}
            </template>
        </b-table>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Administracion',
    data() {
        return {
            fields: ['#','nombre', 'opinion', {key: 'titulo', label: 'Titulo de Pelicula'}],
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
    }
}
</script>

<style>

</style>