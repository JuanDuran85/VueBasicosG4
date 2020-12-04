<template>
  <div class="container my-5">
    <h2>Contador</h2>
    <div class="text-center">
      <button type="button" class="btn btn-primary mx-4" @click="aumentarConta">+ Aumentar</button>
      <button type="button" class="btn btn-danger">- Disminuir</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  methods: {
    aumentarConta(){
      this.$store.dispatch('aumentando') // me ejecuta una acción (actions) en la store
    }
  },
}
</script>

<style scoped>

</style>
