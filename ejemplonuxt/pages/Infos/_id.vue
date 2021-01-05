<template>
    <div>
        <h2>Información</h2>
        <p>Id recibido: {{id}}</p>
    </div>
</template>

<script>
    export default {
        name: 'InfoID',
        data() {
            return {
                id: this.$route.params.id
            }
        },
    }
</script>

<style>

</style>