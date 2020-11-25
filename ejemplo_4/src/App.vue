<template>
  <div>
    <h1>Mensaje desde componente Padre: APP</h1>
    <Tabla/>
  </div>
</template>

<script>
import Tabla from './components/Tabla.vue'

export default {
  name: 'App',
  components: {
    Tabla
  }
}
</script>

<style>

</style>
