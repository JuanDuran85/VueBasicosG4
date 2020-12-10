<template>
    <div>
        <div class="row">
            <div class="my-3 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item,index) in eviarJuegoConStock" :key="index">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{item.nombre}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Stock Disponible: <strong>{{item.stock}}</strong></h6>
                        <p class="card-text">Precio de Venta: {{item.precio | formatoPrecio}} CLP</p>
                        <button class="card-link btn btn-primary" @click="venderProducto(item)">Vender</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-5">
            <div class="text-center">
                <button type="button" class="btn btn-primary" @click="mostrar = !mostrar">
                    Productos <span class="badge bg-secondary">{{enviarProductosVendidos}}</span>
                </button>
            </div>
            <div v-if="mostrar && enviarProductosVendidos > 0">
                <table class="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in eviarBoleta" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{item.nombre}}</td>
                            <td>{{item.precio | formatoPrecio}} CLP</td>
                            <td>{{item.cantidad}}</td>
                            <td><button type="button" class="btn btn-danger" @click="eliminando(item)">Eliminar</button></td>
                            <td><button type="button" class="btn btn-warning" @click="restarProducto(item)">Restar</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="3" class="text-right">Total Venta: {{eviarTotalBoleta | formatoPrecio}} CLP</th>
                            <th>Total Productos: {{eviarCantidadVendida}}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div v-else-if="!mostrar && enviarProductosVendidos <= 0">
                <div class="alert alert-warning" role="alert">
                    No hay productos en el carro...
                </div>
            </div>
        </div>
        <div class="my-5 text-center" v-if="mostrar && enviarProductosVendidos > 0">
            <button type="button" class="btn btn-secondary btn-lg" @click="totalVenta">Totalizar</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Swal from 'sweetalert2';

export default {
    name: 'TablaVentas',
    data() {
        return {
            mostrar: false,
        }
    },
    computed: {
        ...mapGetters(['eviarJuegoConStock', 'enviarProductosVendidos', 'eviarBoleta', 'eviarTotalBoleta','eviarCantidadVendida']),
    },
    filters: {
        formatoPrecio(precio){
            return new Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(parseFloat(precio));
        }
    },
    methods: {
        ...mapActions(['venderProducto', 'restarProducto','eliminando']),
        totalVenta(){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, buy it!'
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Sold!',
                        'Your products has been sold.',
                        'success'
                    );
                    this.$store.dispatch('totalVentaProductos');
                }
            })
        }
    },
}
</script>

<style>

</style>