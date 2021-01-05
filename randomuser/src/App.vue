<template>
  <div>
    <Usuarios :user="usuario"/>
  </div>
</template>

<script>
import Usuarios from './components/Usuarios.vue'

export default {
  name: 'App',
  data() {
    return {
      usuario: []
    }
  },
  components: {
    Usuarios
  },
  created() {
    fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(data =>{
      console.log(data.results);
      this.usuario = data.results;
    })
    .catch(error => console.error(error));
  },
}
</script>

<style lang="scss">
  @import './assets/scss/index';
  @import '~bootstrap/scss/bootstrap.scss';
</style>
