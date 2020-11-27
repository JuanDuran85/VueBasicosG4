<template>
  <div>
    <NavBar />
    <Main/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  data() {
    return {
      mensaje: "Ejemplo de mensaje desde la data del APP"
    }
  },
  components: {
    NavBar,
    Main
  },
  beforeCreate() {
    console.log("Dentro del beforeCreate APP");
    console.log(this.mensaje);
  },
  created() {
    console.log("Dentro del Created APP");
    console.log(this.mensaje);
  },
  beforeMount() {
    console.log("Dentro del beforeMount APP");
    console.log(this.mensaje);
  },
  mounted() {
    console.log("Dentro del Mounted APP");
    console.log(this.mensaje);
  },
  beforeUpdate() {
    console.log("Dentro del beforeUpdate APP");
    console.log(this.mensaje);
  },
  updated() {
    console.log("Dentro del Updated APP");
    console.log(this.mensaje);
  },
  beforeDestroy() {
    console.log("Dentro del beforeDestroy APP");
    console.log(this.mensaje);    
  },
  destroyed() {
    console.log("Dentro del Destroyed APP");
    console.log(this.mensaje);
  },
}
</script>

<style>

</style>
