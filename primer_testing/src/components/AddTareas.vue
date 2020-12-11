<template>
    <div class="container my-5">
        <h2 class="text-center my-4">Agrega una Actividad por Realizar</h2>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Agrega una actividad" aria-label="Agrega una actividad" aria-describedby="button-addon2" v-model="tarea">
            <button class="btn btn-outline-secondary" type="button" @click="addTareaStore" >Agregar</button>
        </div>
        <div class="row my-5">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item,index) in enviarDatosApi" :key="index">
                <div class="card" :class="{sombras : item.favorito}">
                    <img :src="item.avatar" class="card-img-top" :alt="item.id">
                    <div class="card-body">
                        <h5 class="card-title">{{item.first_name}} {{item.last_name}}</h5>
                        <p class="card-text">{{item.email}}</p>
                        <button class="btn btn-primary" @click="agregandoFavoritos(item)" :disabled="item.favorito">Agregar a Favoritos</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'AddTareas',
    data() {
        return {
            tarea: ''
        }
    },
    computed: {
        ...mapGetters(['enviarDatosApi'])
    },
    methods: {
        addTareaStore(){
            if (this.tarea) {
                this.$store.dispatch('agregarTarea',this.tarea)
            } else {
                console.log("no se puede");
            }
        },
        ...mapActions(['agregandoFavoritos'])
    },
}
</script>

<style scoped>
    img {
        max-height: 150px;
    }
    .sombras{
        border: 2px solid red;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(132,132,201,1) 48%, rgba(0,212,255,1) 100%); 
    }
</style>