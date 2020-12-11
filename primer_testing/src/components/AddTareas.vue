<template>
    <div class="container my-5">
        <h2 class="text-center my-4">Agrega una Actividad por Realizar</h2>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Agrega una actividad" aria-label="Agrega una actividad" aria-describedby="button-addon2" v-model="tarea">
            <button class="btn btn-outline-secondary" type="button" @click="addTareaStore" >Agregar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddTareas',
    data() {
        return {
            tarea: ''
        }
    },
    methods: {
        addTareaStore(){
            if (this.tarea) {
                this.$store.dispatch('agregarTarea',this.tarea)
            } else {
                console.log("no se puede");
            }
        }
    },
}
</script>

<style>

</style>