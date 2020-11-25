<template>
  <div>
    <NavBar />
    <Main :mensajeT="titulo" :parrafoProps="parrafo"/>
    <Footer @saludosPadre="reciboEvento"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      titulo: 'Lorem, ipsum dolor sit amet consectetur...',
      parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus ut totam. Culpa praesentium ad officia nobis, reiciendis alias, aut ducimus tempora inventore explicabo veniam sit maxime. Alias, minima. Similique.',
    }
  },
  components: {
    NavBar,
    Main,
    Footer
  },
  methods: {
    reciboEvento(valor){
      console.log(valor);
      alert(`Nombre: ${valor.name}, Apellido: ${valor.lastname}`);
    }
  },
}
</script>

<style>

</style>
