<template>
    <div class="container">
        <h2>Buscar por nombre de País</h2>
        <form @submit.prevent="buscarPais">
            <div class="form-group">
                <label for="exampleInputEmail1">Nombre del País</label>
                <input type="text" class="form-control" v-model="paisNombre" placeholder="Ingresa el nombre del país">
            </div>
            <button type="submit" class="btn btn-primary">Buscar</button>
        </form>
        <div class="mt-5" v-for="(pais,index) in traerPais" :key="index">
            <h2>Informacion del País {{pais.name}}</h2>
            <div class="card">
                <img :src="pais.flag" class="card-img-top" :alt="pais.alpha3Code">
                <div class="card-body">
                    <h5 class="card-title">{{pais.name}}
                    </h5>
                    <p class="card-text">{{pais.altSpellings[2]}}.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Capital: {{pais.capital}}</li>
                    <li class="list-group-item">Región: {{pais.region}}</li>
                    <li class="list-group-item">Subregion: {{pais.subregion}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'Information',
    data() {
        return {
            paisNombre: ''
        }
    },
    computed: {
        traerPais(){
            return this.$store.getters.enviarInfoPais;
        }
    },
    methods: {
        buscarPais(){
            if (this.paisNombre) {
                this.$store.dispatch('buscandoPais',this.paisNombre)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debes ingresar un nombre de país',
                });
            }
        }
    },
}
</script>

<style>

</style>