<template>
    <div class="container mt-5">
        <h2>Resultado</h2>
        <div class="alert alert-info" role="alert">
            {{mostrandoContador}}
        </div>     
    </div>
</template>

<script>
export default {
    name: 'Muestra',
    computed: {
        mostrandoContador(){
            return this.$store.getters.enviandoContador
        }
    },
}
</script>

<style>

</style>