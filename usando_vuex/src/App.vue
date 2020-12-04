<template>
  <div id="app">
    <Contador/>
    <Muestra/>
    <hr>
    <Informacion />
  </div>
</template>

<script>
import Contador from './components/Contador.vue';
import Muestra from './components/Muestra.vue';
import Informacion from '@/components/Informacion.vue';


export default {
  name: 'App',
  components: {
    Contador,
    Muestra,
    Informacion
  },
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap');

#app{
  font-family: 'Teko', sans-serif;
} */
</style>
