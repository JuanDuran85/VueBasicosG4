<template>
  <div class="container">
    <h1 class="text-center my-5">Busca tu Gato</h1>
    <div class="p-5 bg-light">
      <form @submit.prevent="solicitarGato">
        <div class="form-group">
          <label for="titulo">Titulo: </label>
          <input type="text" class="form-control" v-model="titulo">
        </div>

        <div class="form-group">
          <label for="filtro">Filtro: </label>
          <select class="form-control" v-model="filtro">
            <option value="blur">Blur</option>
            <option value="mono">Mono</option>
            <option value="sepia">Sepia</option>
            <option value="negative">Negative</option>
            <option value="paint">Paint</option>
            <option value="pixel">Pixel</option>
          </select>
        </div>

        <div class="form-group bloque">
          <label for="color">Color: </label>
          <select class="form-control colores" v-model="color">
            <option value="red">Rojo</option>
            <option value="green">Verde</option>
            <option value="white">Blanco</option>
            <option value="yellow">Amarillo</option>
            <option value="blue">Azul</option>
          </select>
        </div>
        <span class="circulo" :style="{backgroundColor : color}"></span>

        <div class="form-group">
          <label for="tamano">Tamaño: </label>
          <input type="number" class="form-control" v-model="tamano">
        </div>
        
        <button type="submit" class="btn btn-primary">Buscar</button>
      </form>
    </div>
    <hr>
    <div class="p-5 bg-light border border-dark w-100" v-if="url">
      <h3 class="text-center"><em>Tu gato:</em></h3>
      <img :src="url" alt="gato" class="img-fluid">
    </div>
  </div>
</template>

<script>
export default {
  name: 'RandomGato',
  props: ['url'],
  data() {
    return {
      titulo: '',
      color: 'red',
      tamano: '',
      filtro: ''
    }
  },
  methods: {
    solicitarGato(){
      if (this.titulo && this.color && this.tamano && this.filtro) {
        let data = {
          titulo: this.titulo,
          color: this.color,
          tamano: this.tamano,
          filtro: this.filtro
        };
        this.$emit('solicitandoGato',data);
      } else {
        console.log("No se puede buscar un gato");
      }
    }
  },
}
</script>

<style scoped>
 .circulo{
   width: 50px;
   height: 50px;
   display: inline-block;
   border-radius: 50%;
   border: 1px solid black;
   margin-left: 40px;
   vertical-align: middle
 }
 .colores{
   width: 400px;
 }
 .bloque{
   display: inline-block;
 }
</style>
