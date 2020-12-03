<template>
    <div class="container mt-5 pt-5">
<!--         <section v-if="$route.params.nombre == 'Juan' || $route.params.nombre == 'juan'"> -->
        <section v-if="nombre == 'Juan' || nombre == 'juan'">
            <div class="jumbotron">
                <h1 class="display-4">{{saludo}}</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
            <button type="button" class="btn btn-primary" @click="visitarContacto">Ir a Contactos</button>
        </section>
        <section v-else>
            <div class="alert alert-danger" role="alert">
               <p>Nos se puede mostrar la información</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Usuario',
        props: ['nombre'],
        computed: {
            saludo(){
                return `Hola ${this.nombre}, Bienvenido a tu sito web`;
            }
        },
        methods: {
            visitarContacto(){
                this.$router.push({name: 'Contacto', params: {idContacto: this.nombre}})
            }
        },
    }
</script>

<style>

</style>