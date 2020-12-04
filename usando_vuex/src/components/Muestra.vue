<template>
    <div class="container mt-5">
        <h2>Resultado</h2>
        <div class="alert alert-info" role="alert">
            {{$store.state.contador}}
        </div>     
    </div>
</template>

<script>
    export default {
        name: 'Muestra',
    }
</script>

<style>

</style>