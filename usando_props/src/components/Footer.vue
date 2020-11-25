<template>
    <div class="p-3 bg-dark text-white">
        <h2 class="text-center">Pié de página como componente</h2>
        <div class="text-center">
            <button class="btn btn-light" @click="aviso">Clic Aquí</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        aviso(){
            let data = {
                name: "Juan",
                lastname: "Duran"
            }
            this.$emit('saludosPadre',data);
        }
    },
}
</script>

<style>

</style>