<template>
    <div class="container text-center">
        <h1 class="mt-5">Busquedas...</h1>
        <h3>Información sobre los Juegos</h3>
        <p>La cantidad de juegos registrados es: {{enviarJuegosTotales}}</p>
        <p>La cantidad de stock de juegos total es: {{enviarTotalStock}}</p>
        <div class="my-5 border border-dark">
            <label for="buscar">
                Buscar por Código de Producto<input class="form-control" type="text" v-model="busqueda" placeholder="Escriba el código del producto">
            </label>
        </div>
        <h3 class="mt-5">Listado de Juegos Disponibles</h3>
        <div class="my-4">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Vender</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in enviarListaJuegos" :key="index" :style="{backgroundColor: item.color}">
                        <td>{{item.codigo}}</td>
                        <td>{{item.nombre}}</td>
                        <td>{{item.stock}}</td>
                        <td>{{item.precio}}</td>
                        <td><button type="button" class="btn btn-secondary">Vender</button></td>
                        <td><button type="button" class="btn btn-light">Editar</button></td>
                        <td><button type="button" class="btn btn-danger" @click="borrandoProducto(index)">Borrar</button></td>
                    </tr>
                </tbody>
                </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
    name: 'Busquedas',
    data() {
        return {
            busqueda: ''
        }
    },
    computed: {
        ...mapGetters(['enviarListaJuegos','enviarJuegosTotales','enviarTotalStock']),
        
/*         traerListaJuegos(){
            return this.$store.getters.enviarListaJuegos.filter(result => {
                if (this.busqueda) {
                    return result.codigo == this.busqueda
                } else {
                    return result.codigo;
                }
            });
        } */
    },
    watch: {
        busqueda(vNuevo){
            this.$store.dispatch('valorBusqueda',vNuevo);
        }
    },
    methods: {
        borrandoProducto(index){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$store.dispatch('borrandoItem',index);
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        }
    },
}
</script>

<style scoped>
 td{
     font-size: 18px;
     font-weight: 500;
 }
</style>