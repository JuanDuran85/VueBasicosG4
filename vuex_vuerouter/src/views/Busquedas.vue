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
                        <th>Editar</th>
                        <th>Borrar</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in enviarListaJuegos" :key="index" :style="{backgroundColor: item.color}">
                        <td>{{item.codigo}}</td>
                        <td>{{item.nombre}}</td>
                        <td>{{item.stock}}</td>
                        <td>{{item.precio}}</td>
                        <td><button type="button" class="btn btn-light" @click="editando(item)">Editar</button></td>
                        <td><button type="button" class="btn btn-danger" @click="borrandoProducto(index)">Borrar</button></td>
                        <td><button type="button" class="btn" :class="[item.destacado ? 'btn-success' : 'btn-warning']" @click="destacadoUpdate(index)">{{item.destacado ? 'Si' : 'No'}}</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-5">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Agregar Juego</button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Agregando Juego</h5>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
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
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="guardarNuevo">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            busqueda: '',
            codigo: '',
            nombre: '',
            stock: 0,
            precio: 0,
            color: '',
            destacado: false,
        }
    },
    computed: {
        ...mapGetters(['enviarListaJuegos','enviarJuegosTotales','enviarTotalStock']),
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
        },
        editando(item){
            this.$router.push({name: 'Editar', params: {idLista: item.id}});
        },
        destacadoUpdate(index){
            this.$store.dispatch('actualizarDestacado',index);
        },
        guardarNuevo(){
            if (this.stock >= 0 && this.color && this.nombre.length >= 2 && this.codigo && this.precio >= 0) {
                let juego = {
                    codigo : this.codigo,
                    nombre : this.nombre,
                    stock : this.stock,
                    precio : this.precio,
                    color : this.color,
                    destacado : this.destacado,
                }
                this.$store.dispatch('guardarProducto',juego);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Perfect...',
                    showConfirmButton: true,
                    timer: 2000
                })
            } else {
                Swal.fire({
                    position: 'center',
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

<style scoped>
 td{
     font-size: 18px;
     font-weight: 500;
 }
</style>