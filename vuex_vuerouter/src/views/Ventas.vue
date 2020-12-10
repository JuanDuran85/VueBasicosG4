<template>
    <div class="container">
        <h2 class="text-center display-4 my-5">Ventas</h2>
        <tabla-ventas></tabla-ventas>
    </div>
</template>

<script>
import TablaVentas from '@/components/TablaVentas.vue'
export default {
    name: 'Ventas',
    components: { 
        TablaVentas 
    },
}
</script>

<style>

</style>