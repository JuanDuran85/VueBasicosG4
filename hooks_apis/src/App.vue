<template>
  <div>
    <h1>Data de la API</h1>
    <!--  -->
    <p>Mensaje: {{ mensaje.split('').reverse().join('') }}</p>
    <p>Mensaje: {{ invertirMensaje }}</p>
    <p>Fecha; {{fechaData}}</p>
    <p>Nombre Completo: {{nombreCompleto}}</p>

    <hr>
    <div class="text-center" v-if="!datosApi">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item,index) in datosApi" :key="index">
        <div class="card">
          <img :src="item.avatar" class="card-img-top" :alt="item.id">
          <div class="card-body">
            <h5 class="card-title">{{item.last_name}} - {{item.first_name}}</h5>
            <p class="card-text">{{item.email}}</p>
            <a href="#" class="btn btn-primary">Visitar</a>
          </div>
        </div>
      </div>
    </div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      nombre: 'Juan',
      apellido: 'Duran',
      mensaje: 'Mensaje que se invierte con metodos de arreglos...',
      datosApi: null,
      datosAPi2: null,
      datosAPi3: null,
      datosAPi4: null,
    }
  },
  computed: {
    invertirMensaje(){
      return this.mensaje.split('').reverse().join('');
    },
    fechaData(){
      let fecha = new Date();
      return fecha;
    },
    nombreCompleto: {
      get: function () {
        return this.nombre + " " + this.apellido;
      },
      set: function (nuevoNombre) {  
        let nuevo = nuevoNombre.split(' ');
        this.nombre = nuevo[0]; 
        this.apellido = nuevo[1];
      }
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    llamadoApi(url){
      fetch(url)
      .then(resp => resp.json())
      .then(result => { 
        console.log(result)
        this.datosAPi3 = result;
      })
      .catch(error => console.error(error));
    },
    async datosDeApi(url){
      let resultado = await fetch(url);
      this.datosAPi4 = await resultado.json();
    }
  },
  created() {
    console.log("desde el created de la APP");
    this.llamadoApi('https://jsonplaceholder.typicode.com/users');
    fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(result => { 
        console.log(result.data)
        setTimeout(() => {
          this.datosApi = result.data;
        },3000);
      })
      .catch(error => console.error(error));
  },
  beforeMount() {
    console.log("desde el beforeMount de la APP");
    this.datosDeApi('https://jsonplaceholder.typicode.com/users');
  },
  async mounted() {
    console.log("desde el Mounted de la APP");
    let data = await fetch('https://randomuser.me/api/');
    let result = await data.json();
    this.datosAPi2 = result.results;
  },
}
</script>

<style>

</style>
