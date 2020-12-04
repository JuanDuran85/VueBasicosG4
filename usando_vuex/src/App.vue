<template>
  <div>
    <Contador/>
    <Muestra/>
  </div>
</template>

<script>
import Contador from './components/Contador.vue';
import Muestra from './components/Muestra.vue';

export default {
  name: 'App',
  components: {
    Contador,
    Muestra,
  },
}
</script>

<style>

</style>
