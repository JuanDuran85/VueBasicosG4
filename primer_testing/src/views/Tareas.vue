<template>
  <div class="container my-5">
    <lista-tareas></lista-tareas>
  </div>
</template>

<script>
import ListaTareas from '@/components/ListaTareas.vue';
export default {
  name: 'Tarea',
  components: {
    ListaTareas
  }
}
</script>

<style scoped>

</style>
