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
                            <td>{{item.precio}}</td>
                            <td>{{item.cantidad}}</td>
                            <td><button type="button" class="btn btn-danger" >Eliminar</button></td>
                            <td><button type="button" class="btn btn-warning" @click="restarProducto(item)">Restar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else-if="!mostrar && enviarProductosVendidos <= 0">
                <div class="alert alert-warning" role="alert">
                    No hay productos en el carro...
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: 'TablaVentas',
    data() {
        return {
            mostrar: false,
        }
    },
    computed: {
        ...mapGetters(['eviarJuegoConStock', 'enviarProductosVendidos', 'eviarBoleta']),
    },
    filters: {
        formatoPrecio(precio){
            return new Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(parseFloat(precio));
        }
    },
    methods: {
        ...mapActions(['venderProducto', 'restarProducto'])
    },
}
</script>

<style>

</style>