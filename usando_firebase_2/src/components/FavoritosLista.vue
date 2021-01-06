<template>
    <div>
        <h2 class="my-5">Peliculas Favoritas del Usuario</h2>
        <div class="d-flex justify-content-center" v-if="mostrando">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else-if="enviandoPeliculasFav.length > 0 && !mostrando">
            <b-row>
                <b-col cols="12" sm="12" md="6" lg="4" xl="4" v-for="(peli, index) in enviandoPeliculasFav" :key="index">
                    <b-card :title="peli.title" :img-src="`https://image.tmdb.org/t/p/w500${peli.poster_path}`" :img-alt="peli.title" img-top tag="article" class="mb-2">
                        <div>
                            <b-button href="#" variant="info" class="mx-3" @click="quitarPeliFav(peli.idDoc)">Quitar</b-button>
                        </div>
                    </b-card>
                </b-col>
            </b-row>   
        </div>
        <div v-else>
            <b-alert variant="danger" show>
                No hay Peliculas en Favoritos para mostrar
            </b-alert>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'FavoritosLista',
     data() {
        return {
            mostrando: true
        }
    },
    mounted() {
        setTimeout(()=>{
            this.mostrando = false;
        },2000);
        this.$store.dispatch('traerFavPelis');
    },
    computed: {
        ...mapGetters(['enviandoPeliculasFav'])
    },
    methods: {
        quitarPeliFav(idDoc){
            console.log(idDoc);
            this.$store.dispatch('deletePeliFav',idDoc).then(()=>{
                console.log('eliminado de favoritos');
                this.$notify({
                    title: 'Success',
                    message: 'Favorito eliminado con éxito',
                    type: 'success'
                });
            }).catch(()=>{
                console.log("error");
            });
            this.$store.dispatch('eliminarFavLocal', idDoc);
        }
    }
}
</script>

<style>

</style>