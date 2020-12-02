<template>
    <div>
        <h1>Página de contacto</h1>
        <img src="https://www.clasesdeperiodismo.com/wp-content/uploads/2016/05/contactos.jpg" alt="contactos">
        <hr>
        <router-link tag="button" :to="{name: 'Correo'}">Ver correos Eléctronicos</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Contacto'
    }
</script>

<style>

</style>