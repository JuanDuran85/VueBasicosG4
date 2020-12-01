<template>
  <div id="app">
    <RandomGato @solicitandoGato="conexionAPI" :url="url" />
  </div>
</template>

<script>
import RandomGato from './components/RandomGato.vue'

export default {
  name: 'App',
  data() {
    return {
      url: ''
    }
  },
  components: {
    RandomGato
  },
  methods: {
    async conexionAPI(data){
      console.log(data);
/*       fetch(`https://cataas.com/cat/gif/says/${data.titulo}?filter=${data.filtro}&color=${data.color}&size=${data.tamano}`)
      .then(resp => {
        console.log(resp);
        this.url = resp.url;
      })
      .catch(err => console.error(err)); */
      try {
        let resp = await fetch(`https://cataas.com/cat/gif/says/${data.titulo}?filter=${data.filtro}&color=${data.color}&size=${data.tamano}`);
        this.url = resp.url
      } catch (error) {
        console.error(error);
      }
    }
  },
}
</script>

<style>

</style>
