<template>
    <div class="container my-5">
        <div v-if="enviandoComentarios.length > 0">
            <div class="accordion" id="accordionExample">
                <div class="card" v-for="(item,index) in enviandoComentarios" :key="index">
                    <div class="card-header" :id="'headingOne'+index">
                        <h2 class="mb-0">
                            <button class="btn btn-block text-left" type="button" data-toggle="collapse" :data-target="'#collapse'+index" aria-expanded="true" :aria-controls="'collapse'+index">
                                Nombre del Juego: {{item.nombreJuego}} - Nombre del relator: {{item.nombre}}
                            </button>
                        </h2>
                    </div>
                    <div :id="'collapse'+index" class="collapse show" :aria-labelledby="'headingOne'+index" data-parent="#accordionExample">
                        <div class="card-body">
                            {{item.comentario}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                No existen comentarios por mostrar...
                <button type="button" class="btn btn-primary" @click="$router.go(-1)">Ir atras</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'Comentarios',
    computed: {
        ...mapGetters(['enviandoComentarios'])
    }

}
</script>

<style>

</style>