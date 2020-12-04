<template>
  <div class="container text-center">
      <h1>{{mostrarTitulo}}</h1>
      <h2>{{mostrarSubTitulo}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  computed: {
    mostrarTitulo(){
      return this.$store.getters.enviarTitulo;
    },  
    mostrarSubTitulo(){
      return this.$store.getters.enviarSubTitulo;
    }  
  }
}
</script>
