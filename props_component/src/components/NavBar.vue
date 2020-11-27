<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      mensaje: "Ejemplo de mensaje desde la data del NavBar"
    }
  },
  beforeCreate() {
    console.log("Dentro del beforeCreate NavBar");
    console.log(this.mensaje);
  },
  created() {
    console.log("Dentro del Created NavBar");
    console.log(this.mensaje);
  },
  beforeMount() {
    console.log("Dentro del beforeMount NavBar");
    console.log(this.mensaje);
  },
  mounted() {
    console.log("Dentro del Mounted NavBar");
    console.log(this.mensaje);
  },
  beforeUpdate() {
    console.log("Dentro del beforeUpdate NavBar");
    console.log(this.mensaje);
  },
  updated() {
    console.log("Dentro del Updated NavBar");
    console.log(this.mensaje);
  },
  beforeDestroy() {
    console.log("Dentro del beforeDestroy NavBar");
    console.log(this.mensaje);    
  },
  destroyed() {
    console.log("Dentro del Destroyed NavBar");
    console.log(this.mensaje);
  },
}
</script>

<style scoped>

</style>
