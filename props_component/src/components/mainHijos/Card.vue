<template>
    <div class="container">
        <h1 class="my-4 text-center">Información de Usuarios. <a class="btn btn-info card-link" @click="mostrarFormulario">Agregar Usuario</a></h1> 

        <!-- Mostrando tarjetas -->
        <div class="row" v-if="!muestra">
            <!-- se hace vfor para cada columna con su tarjeta -->
            <div class="my-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item, index) in infoUsers" :key="index" v>
                <div class="card">
                    <img :src="item.image" class="card-img-top" :alt="item.id">
                    <div class="card-body">
                        <h5 class="card-title" v-text="item.name"></h5>
                        <p class="card-text">User Name: {{item.username}} - Phone: {{item.phone}}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{item.address.street}}</li>
                        <li class="list-group-item">{{item.company.name}}</li>
                        <li class="list-group-item">{{item.company.catchPhrase}}</li>
                    </ul>
                    <div class="card-body mx-auto">
                        <!-- boton para editar usuario - se activa el boton para cada modal que esta oculta, se implementa un data-target dinamico con el id de cada usuario -->
                        <a class="btn btn-info card-link" data-toggle="modal" :data-target="`#usuario-${item.id}`">Editar Usuario</a>
                        <!-- boton para eliminar usuario -->
                        <a class="btn btn-danger card-link" @click="eliminando(index)">Eliminar</a>
                    </div>
                </div>
            </div>     
        </div>

        <!-- Agregando Usuarios con formulario -->
        <div v-else class="mt-5">
            <h2 class="my-3 text-center">Agregando nuevo usuario</h2>
            <form class="border border-dark" @submit.prevent="agregarUser">
                <div class="form-group">
                    <label for="nombre">Nombre y Apellido</label>
                    <input type="text" class="form-control" v-model="name">
                </div>
                <div class="form-group">
                    <label for="nombre">Nombre de Usuario</label>
                    <input type="text" class="form-control" v-model="username">
                </div>
                <div class="form-group">
                    <label for="telefono">Telefono</label>
                    <input type="text" class="form-control" v-model="phone">
                </div>
                <div class="form-group">
                    <label for="Direccion">Direccion</label>
                    <input type="text" class="form-control" v-model="address">
                </div>
                <div class="form-group">
                    <label for="company">Nombre de la empresa</label>
                    <input type="text" class="form-control" v-model="company">
                </div>
                <div class="form-group">
                    <label for="frase">Frase Tipica</label>
                    <input type="text" class="form-control" v-model="catchPhrase">
                </div>
                <!-- El boton agrega el usuario mediante el submit del formulario -->
                <button type="submit" class="btn btn-primary mx-2">Agregar</button>
                <!-- se cancela el formulario ocultandolo y mostrando las tarjetas -->
                <button type="button" class="btn btn-info" @click="cancelarFormulario">Cancelar</button>
            </form>
        </div>

        <!-- Editando informacion de cada usuarios con ventanas modales -->
        <div >
            <!-- se crea cada Modal de forma dinamica con vfor y un id distinto mediante el id de cada usuario-->
            <div class="modal fade" :id="`usuario-${item.id}`" tabindex="-1" :aria-labelledby="`exampleModalLabel-${item.id}`" aria-hidden="true" v-for="(item,index) in infoUsers" :key="index">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="`exampleModalLabel-${item.id}`">Editando al usuario: {{item.name}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                        <label for="nombre">Nombre y Apellido</label>
                        <input type="text" class="form-control" v-model="name2">
                    </div>
                    <div class="form-group">
                        <label for="nombre">Nombre de Usuario</label>
                        <input type="text" class="form-control" v-model="username2">
                    </div>
                    <div class="form-group">
                        <label for="telefono">Telefono</label>
                        <input type="text" class="form-control" v-model="phone2">
                    </div>
                    <div class="form-group">
                        <label for="Direccion">Direccion</label>
                        <input type="text" class="form-control" v-model="address2">
                    </div>
                    <div class="form-group">
                        <label for="company">Nombre de la empresa</label>
                        <input type="text" class="form-control" v-model="company2">
                    </div>
                    <div class="form-group">
                        <label for="frase">Frase Tipica</label>
                        <input type="text" class="form-control" v-model="catchPhrase2">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Guardar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    name: 'Card',
    data() {
        return {
            mensaje: "en el componente hijo Card",
            /* mostrar o ocultar tarjetas y fomulario de agregar */
            muestra: false,
            /* ------------------------------ */
            /* Datos para agregar usuarios */
            name: '',
            address: '',
            phone: '',
            company: '',
            catchPhrase: '',
            username: '',
            /* ------------------------------ */
            /* Datros para editar usuarios */
            name2: '',
            address2: '',
            phone2: '',
            company2: '',
            catchPhrase2: '',
            username2: '',
            /* ------------------------------ */
        }
    },
    props: {
        /* Informacion recibida del padre */
        infoUsers: {
            type: Array,
            required: true,
            default(){
                return [
                    {id: 0, name: "no tiene"}
                ]
            }
        }
    },
    methods: {
        /* Eliminando usuario, se implementa swal para confirmar */
        eliminando(index){
            Swal.fire({
                title: '¿Estas seguro que deseas eliminar al usuario?',
                text: "no se puede revertir el procedimiento",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Borra eso'
            }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {
                    /* Se usa emit para enviar evento personalizado al padre con el index del elemento a eliminar */
                    this.$emit('eliminarUser',index);
                    setTimeout(()=>{
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    },1000);
                }
            })
        },
        mostrarFormulario(){
            /* se muestra formalario para agregar nuevo usuario */
            this.muestra = true;
        },
        cancelarFormulario(){
            /* se cancela el formulario de agregar nuevo usuario */
            this.muestra = false;
        },
        agregarUser(){
            /* se agrega un nuevo usuario, primero se verifica */
            if (this.name && this.address && this.phone && this.company && this.catchPhrase && this.username) {
                /* se crea el objeto con toda la data del usuario nuevo */
                let datoUser = {
                    id: this.infoUsers.length+1,
                    name: this.name,
                    image: "http://lorempixel.com/640/480/people",
                    username: this.username,
                    address: {
                        street: this.address
                    },
                    phone: this.phone,
                    company: {
                        name: this.company,
                        catchPhrase: this.catchPhrase,
                    },
                };
                /* se limpian los campos del formulario de agregar usuario */
                this.name = '';
                this.address = '';
                this.phone = '';
                this.company = '';
                this.catchPhrase = '';
                this.username = '';
                /* se envia al padre el evento personalizado para agregar usuario con los datos guardados */
                this.$emit('agregandoUsuario',datoUser);
                this.muestra = false;
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se puede registrar usuarios sin datos!',
                    footer: 'Intente nuevamente'
                });
            }
        },
    },
    beforeCreate() {
    console.log("Dentro del beforeCreate Card");
    console.log(this.mensaje);
  },
  created() {
    console.log("Dentro del Created Card");
    console.log(this.mensaje);
  },
  beforeMount() {
    console.log("Dentro del beforeMount Card");
    console.log(this.mensaje);
  },
  mounted() {
    console.log("Dentro del Mounted Card");
    console.log(this.mensaje);
  },
  beforeUpdate() {
    console.log("Dentro del beforeUpdate Card");
    console.log(this.mensaje);
  },
  updated() {
    console.log("Dentro del Updated Card");
    console.log(this.mensaje);
  },
  beforeDestroy() {
    console.log("Dentro del beforeDestroy Card");
    console.log(this.mensaje);    
  },
  destroyed() {
    console.log("Dentro del Destroyed Card");
    console.log(this.mensaje);
  },
}
</script>

<style>

</style>