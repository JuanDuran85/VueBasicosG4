<template>
    <div class="container">
        <div class="row my-5" v-if="enviarFavoritos.length > 0">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item,index) in enviarFavoritos" :key="index">
                <div class="card">
                    <img :src="item.avatar" class="card-img-top" :alt="item.id">
                    <div class="card-body">
                        <h5 class="card-title">{{item.first_name}} {{item.last_name}}</h5>
                        <p class="card-text">{{item.email}}</p>
                        <a href="#" class="btn btn-primary">Eliminar</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
               No hay favoritos
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'Favoritos',
    computed: {
        ...mapGetters(['enviarFavoritos'])
    }
}
</script>

<style>

</style>