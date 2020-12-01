<template>
  <div class="container text-center">
    <img alt="pokemon" src="./assets/Pokemon_(letters).png" class="my-5">
    <PokeGuia @buscarPoke="buscarPokemon" :pokemonRecib="pokemon"/>
  </div>
</template>

<script>
import PokeGuia from './components/PokeGuia.vue'

export default {
  name: 'App',
  data() {
    return {
      pokemon: {}
    }
  },
  components: {
    PokeGuia
  },
  methods: {
    buscarPokemon(data){
      fetch('https://pokeapi.co/api/v2/pokemon/' + data)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.pokemon = result;
      })
      .catch(error => console.error(error))
    }
  },
  created() {
    this.buscarPokemon('pikachu');
  },
}
</script>

<style>

</style>
