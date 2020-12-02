<template>
    <div>
        <div v-if="$route.params.nombre == 'Sebastian'">
            <p>El parametro de la ruta es: {{$route.params.nombre}}</p>
            <h2>Nosotros</h2>
            <p>Bienvenido a tu pagina web: {{$route.params.nombre}}</p>
            <p>Bienvenido a tu pagina web: {{$route.path}}</p>
            <p>Bienvenido a tu pagina web: {{$route.fullPath}}</p>
            <p>Bienvenido a tu pagina web: {{$route.name}}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis quod facere in odit iure repellendus necessitatibus cupiditate vero molestias eius, explicabo voluptatum ut enim reiciendis, earum aspernatur voluptas quaerat.</p>
            <img src="https://aer.com.mx/wp-content/uploads/2018/09/AER-banner-nosotros04.jpg" alt="nosotros">
        </div>
        <div v-else>
            <h2>Intruso...</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Info',
    mounted() {
        if (this.$route.params.nombre == "Sebastian") {
            alert("Bienvenido")
        } else {
            console.log("No eres bienvenido");
        }
        
    },
}
</script>

<style scoped>
    img {
        width: 100%;
        height: 50vh
    }
</style>