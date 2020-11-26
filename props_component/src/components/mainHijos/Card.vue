<template>
    <div class="container">
        <h1 class="my-4 text-center">Información de Usuarios. <a class="btn btn-info card-link" @click="mostrarFormulario">Agregar Usuario</a></h1> 
        <div class="row" v-if="!muestra">
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
                        <a class="btn btn-info card-link">Editar Usuario</a>
                        <a class="btn btn-danger card-link" @click="eliminando(index)">Eliminar</a>
                    </div>
                </div>
            </div>     
        </div>
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
                <button type="submit" class="btn btn-primary mx-2">Agregar</button>
                <button type="button" class="btn btn-info" @click="cancelarFormulario">Cancelar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data() {
        return {
            muestra: false,
            name: '',
            address: '',
            phone: '',
            company: '',
            catchPhrase: '',
            username: '',
        }
    },
    props: {
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
        eliminando(index){
            this.$emit('eliminarUser',index);
        },
        mostrarFormulario(){
            this.muestra = true;
        },
        cancelarFormulario(){
            this.muestra = false;
        },
        agregarUser(){
            if (this.name && this.address && this.phone && this.company && this.catchPhrase && this.username) {
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
                this.name = '';
                this.address = '';
                this.phone = '';
                this.company = '';
                this.catchPhrase = '';
                this.username = '';
                this.$emit('agregandoUsuario',datoUser);
                this.muestra = false;
            } else {
                console.log("no se puede");
            }
        },
    },
}
</script>

<style>

</style>