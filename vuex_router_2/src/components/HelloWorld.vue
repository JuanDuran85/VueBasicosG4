<template>
  <div class="hello">
    <h1>Estado activo en HelloWorld (como no se debe)</h1>
    <h3>{{ $store.state.activo }}</h3>
   
    <hr>
   
    <h1>Estado activo en HelloWorld con getters</h1>
    <h3>{{ traerActivo }}</h3>

    <hr>
    <h2>Contando +</h2>
    <h4>{{TraerContador}}</h4>
    <div>
      <button @click="aumentando">+ Aumentar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    traerActivo(){
      return this.$store.getters.enviarActivo;
    },
    TraerContador(){
      return this.$store.getters.enviarContador;
    }
  },
  methods: {
    aumentando(){
      this.$store.dispatch('aumentandoContador');
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
