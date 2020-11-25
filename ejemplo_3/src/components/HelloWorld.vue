<template>
  <div class="hello">
    <h1>Bienvenido al componente HelloWorld</h1>
    <ul>
      <li v-for="(numeros, index) in arreglo" :key="index" v-text="numeros"></li>
    </ul>
    <section>
      <p v-for="(user,index) in usuarios" :key="index">{{user.name}}</p>
    </section>
    <section>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
          </tr>
        </thead> 
        <tbody>
            <tr v-for="(user, index) in usuarios" :key="index">
              <td>{{user.id}}</td>
              <td>{{user.name}}</td>
              <td>{{user.lastname}}</td>
              <td>{{user.address}}</td>
              <td>{{user.city}}</td>
            </tr>
        </tbody>
      </table>
    </section>
    <form @submit.prevent="cargarFomulario">
      <p>Ingrese el Nombre: </p>
      <input type="text" placeholder="Nombre" v-model="nombre">
      <p>Ingrese el Apellido: </p>
      <input type="text" placeholder="Apellido" v-model="apellido">
      <button type="submit">Enviar</button>
    </form>
    <p v-if="nombre">El nombre que estas escribiendo es: <span v-text="nombre"></span> <span v-text="apellido"></span></p>
    <p v-else>No tienes nombre aun</p>
    <button v-on:click="saludar">Clic Aqui</button>
    <button v-on:click="mostrarNombre">Mostrar Nombre</button>
    <button @click="mostrarApellido">Mostrar Apellido</button>
    <hr>
    <div>
      <img v-bind:src="url" :alt="nombreLogo">
    </div>
    <div>
      <p>Ingresa la URL de la imagen a mostrar</p>
      <input type="text" v-model="imagenUrl">
      <button @click="mostrarImg">Enviar URL</button>
    </div>
    <div v-if="mostrar">
      <img v-bind:src="imagenUrl" alt="imagen extra">
    </div>
    <div v-else>
     <p>No existe una URL permitida...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      imagenUrl: '',
      mostrar: false,
      url: 'https://3lhowb48prep40031529g5yj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/logo-vuejs-min.png',
      nombreLogo: 'Logo de VueJS',
      nombre: '',
      apellido: '',
      arreglo: [1,2,3,4,5,6,7,8,9],
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
      mensaje: "Información de usuarios: "
    }
  },
  methods: {
    saludar(){
      alert("Saludos desde evento 'click' - metodo 'saludar'");
    },
    mostrarNombre(){
      console.log(this.nombre);
    },
    mostrarApellido(){
      console.log(this.apellido);
    },
    cargarFomulario(){
      if (this.nombre) {
        alert("El nombre del usuario es: "+this.nombre);
      } else {
        alert('No tienes nombre, debes ingresar un nombre');
      }
    },
    mostrarImg(){
      if (this.imagenUrl) {
        this.mostrar = true;
      } else {
        this.mostrar = false;
        alert("Debes ingresar una URL");
      }
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
