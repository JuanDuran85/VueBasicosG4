<template>
  <div class="about">
    <h1>Estado activo en About (como no se debe)</h1>
    <h3>{{ $store.state.activo }}</h3>
    
    <hr>
    
    <h1>Estado activo en About con getters</h1>
    <h3>{{ $store.getters.enviarActivo }}</h3>
    <div>
      <button @click="modificando">Modificar</button>
    </div>

    <hr>
    <h2>Contando -</h2>
    <h4>{{TraerContador}}</h4>
    <div>
      <button @click="disminuyendo">- Disminuir</button>
    </div>

    <div v-if="traerContadorCinco">
      <h1>El contador es mayor que 5</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    TraerContador(){
      return this.$store.getters.enviarContador;
    },
    traerContadorCinco(){
      return this.$store.getters.enviarContadorMayorCinco
    }
  },
  methods: {
    modificando(){
      this.$store.dispatch('updateActivo')
    },
    disminuyendo(){
      this.$store.dispatch('desminuirContador');
    }
  },
  
}
</script>
