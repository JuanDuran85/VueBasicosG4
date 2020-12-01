<template>
  <div class="">
    <h3>PokeGuía</h3>
    <div class="form-group row">
        <label for="pokemon" class="col-sm-2 col-form-label">Nombre/Número</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="pokemon">
        </div>
    </div>
    <button type="button" class="btn btn-primary" @click="buscarPokemon">Buscar</button>
    <div class="mt-5 bg-light p-5" v-if="pokemonRecib">
      <img :src="pokemonRecib.sprites.front_default" :alt="pokemonRecib.id">
      <h3>Movimientos</h3>
      <ul>
        <li v-for="(item,index) in movimientos" :key="index">{{item.move.name}}</li>
      </ul>
      <h3>Habilidades</h3>
      <ul>
        <li v-for="(item,index) in habilidades" :key="index">{{item.ability.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeGuia',
  props: {
    pokemonRecib: {
      type: Object,
      required: true}
  },
  data() {
    return {
      pokemon: ''
    }
  },
  computed: { 
    habilidades(){
      return this.pokemonRecib.abilities;
    },
    movimientos(){
      return this.pokemonRecib.moves;
    }
  },
  methods: {
    buscarPokemon(){
      if(this.pokemon){
        this.$emit('buscarPoke',this.pokemon)
      }else{
        console.log("No se puede buscar");
      }
    }
  },
}
</script>


<style scoped>

</style>
