<template>
    <div class="container my-5">
        <div v-if="idJuego" class="my-5">
            <h2>Editando a: {{juegoNombre}}</h2>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" class="form-control" v-model="nombre">
                </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Comentario</label>
                    <textarea class="form-control" rows="3" v-model="cometario"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mx-3" @click="guardarEdicion">Guardar</button>
                <button type="submit" class="btn btn-info" @click="$router.push('/administracion')">Regresar</button>
                </form>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                El juego no existe...
                <button type="button" class="btn btn-primary" @click="$router.push('/administracion')">Ir atras</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Editar',
    props: ['id'],
    data() {
        return {
           nombre: '',
           comentario: '',
           juegoNombre: '',
           idJuego: null,
        }
    },
    mounted() {
        let comentarioGlobal = this.$store.getters.enviandoComentarios.find(res => res.idJuego === this.id);
        if (comentarioGlobal !== undefined) {
            this.nombre = comentarioGlobal.nombre;
            this.cometario = comentarioGlobal.comentario;
            this.juegoNombre = comentarioGlobal.nombreJuego;
            this.idJuego = comentarioGlobal.idJuego;
        } else {
            this.idJuego = null;
        }

    },
    methods: {
        guardarEdicion(){
            let juegoEditado = {
                nombre: this.nombre,
                comentario: this.comentario,
                juegoNombre: this.juegoNombre,
                idJuego: this.idJuego,
            };
            this.$router.push({name: 'Administracion'});
            this.$store.dispatch('guardandoEdicion',juegoEditado);
        }
    },
}
</script>

<style>

</style>