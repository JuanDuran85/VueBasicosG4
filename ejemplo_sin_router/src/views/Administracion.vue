<template>
    <div>
        <h2>Administración</h2>
        <div v-if="$route.params.tipo == 'simple'">
            <h1>Bienvenido a la página de Administración”</h1>
        </div>
        <div v-else-if="$route.params.tipo == 'avanzado'">
            <Avanzado/>
        </div>
        <div v-else>
            <p>La ruta no existe...</p>
        </div>
    </div>
</template>

<script>
import Avanzado from '../components/Avanzado.vue';

    export default {
        name: 'Administracion',
        components: {
            Avanzado
        },
        methods: {
            regresar(){
                console.log("en mounted");
                setTimeout(()=>{
                    this.$router.push('/about');
                },3000);  
            }
        },
        mounted() {
           if (this.$route.params.tipo != 'simple' || this.$route.params.tipo != 'avanzado') {
              this.regresar() 
           }
        },
    }
</script>

<style>

</style>