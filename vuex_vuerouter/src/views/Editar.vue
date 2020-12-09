<template>
    <div class="container">
        <h2 class="mt-5">Editando el Producto: {{nombre}}</h2>
        <form @submit.prevent="guardarEditar">
            <div class="mb-3">
                <label for="id" class="form-label">Id</label>
                <input type="text" disabled class="form-control" v-model="idJuego">
            </div>
            <div class="mb-3">
                <label for="codigo" class="form-label">Código</label>
                <input type="text" class="form-control" v-model="codigo">
            </div>
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" v-model="nombre">
            </div>
            <div class="mb-3">
                <label for="stock" class="form-label">Stock</label>
                <input type="text" class="form-control" v-model="stock">
            </div>
            <div class="mb-3">
                <label for="precio" class="form-label">Precio</label>
                <input type="text" class="form-control" v-model="precio">
            </div>
            <div class="mb-3">
                <label for="color" class="form-label">Color</label>
                <input type="color" class="form-control" v-model="color">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" v-model="destacado">
                <label class="form-check-label" for="exampleCheck1">Check me</label>
            </div>
            <button type="submit" class="btn btn-success">Guardar</button>
            <button type="button" class="btn btn-primary mx-4" @click="$router.go(-1)">Regresar</button>
        </form>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'Editar',
    data() {
        return {
            idJuego: '',
            codigo: '',
            nombre: '',
            stock: '',
            precio: '',
            color: '',
            destacado: false,
        }
    },
    props: {
        idLista: {
            type: String,
            required: true
        }
    },
    mounted() {
        let item = this.$store.getters.enviarListaJuegos.find(result => result.id == this.idLista);
        if(item){
            this.codigo = item.codigo;
            this.nombre = item.nombre;
            this.stock = item.stock;
            this.precio = item.precio;
            this.color = item.color;
            this.destacado = item.destacado;
            this.idJuego = item.id;
        }else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'The product dosent exist',
                showConfirmButton: false,
                timer: 2000
            }).then(()=>{
                this.$router.push({name: 'Busquedas'})
            })
        }
    },
    methods: {
        guardarEditar(){
            if (this.stock >= 0 && this.color && this.nombre.length >= 2 && this.codigo && this.precio >= 0) {
                let juego = {
                    codigo : this.codigo,
                    nombre : this.nombre,
                    stock : this.stock,
                    precio : this.precio,
                    color : this.color,
                    destacado : this.destacado,
                    id: this.idJuego
                };
                this.$store.dispatch('guardarJuego',juego);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 2000
                }).then(()=>{
                    this.$router.push({name: 'Busquedas'});
                })
            } else {
                Swal.fire({
                    position: 'top-left',
                    icon: 'error',
                    title: 'You have an error in the form',
                    showConfirmButton: true,
                    timer: 2000
                })
            }
        }
    },
}
</script>

<style>

</style>