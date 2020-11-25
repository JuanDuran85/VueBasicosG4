<template>
  <div class="container text-center mt-5">
    <h1 v-text="mensaje"></h1>
    <div>
      <button type="button" class="btn btn-secondary" @click="toggleTabla">{{mostrando ? 'Ocultar' : 'Mostrar'}}</button>
    </div>
    <table class="table table-hover mt-4" v-if="mostrando">
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Address</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(alias,index) in usuarios" :key="index">
          <td>{{alias.id}}</td>
          <td>{{alias.name}}</td>
          <td>{{alias.lastname}}</td>
          <td>{{alias.address}}</td>
          <td>{{alias.city}}</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <Entrada />
  </div>
</template>

<script>
import Entrada from './Entrada.vue';

export default {
  name: 'Tabla',
  data() {
    return {
      mostrando: false,
      mensaje: "Usuarios listados: ",
      usuarios: [
        {id: 1, name: 'Erik', lastname: 'Klein', address: 'Roosevelt Causeway', city: 'South Olen'},
        {id: 2, name: 'Cathryn', lastname: 'Heathcote', address: 'Ernser Gateway', city: 'Winstonville'},
        {id: 3, name: 'Anika', lastname: 'Muller', address: 'Jacobson Center', city: 'Weberhaven'},
        {id: 4, name: 'Eliezer', lastname: 'Kub', address: 'Abernathy Inlet', city: 'Noblefort'},
        {id: 5, name: 'Raegan', lastname: 'Bayer', address: 'Rudy Causeway', city: 'Dietrichton'},
        {id: 6, name: 'Margarita', lastname: 'Cronin', address: 'Deven Island', city: 'East Camden'},
        {id: 7, name: 'Caleb', lastname: 'Bergstrom', address: 'Maximillian Harbors', city: 'Gerlachbury'},
        {id: 8, name: 'Samantha', lastname: 'Schinner', address: 'Bechtelar Lane', city: 'Prohaskamouth'},
        {id: 9, name: 'Anabelle', lastname: 'Cruickshank', address: 'Collins Walks', city: 'Rueckerside'},
        {id: 10, name: 'Dedric', lastname: 'Abshire', address: 'Schmeler Islands', city: 'Streichfurt'},
      ],
    }
  },
  methods: {
    toggleTabla(){
      this.mostrando = !this.mostrando;
    }
  },
  components: {
    Entrada
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
