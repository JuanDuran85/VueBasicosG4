<template>
    <div class="container mt-5">
        <h2 class="display-3 text-center mt-5">Total Ventas:</h2>
        <div>
            <p>Tienes {{enviandoTotalVenta.length}} boletas para revisar
                <select v-model="valores">
                    <option :value="index" v-for="(item,index) in enviandoTotalVenta" :key="index">{{index+1}}</option>
                </select>
            </p>
        </div>
        <div v-if="enviandoTotalVenta.length > 0" class="mt-5">
            <table class="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total Venta</th>
                        <th>Total Producto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in enviandoTotalVenta[valores]" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.nombre}}</td>
                        <td>{{item.precio | formatoPrecio}} CLP</td>
                        <td>{{item.cantidad}}</td>
                        <td>{{item.totalBoleta}}</td>
                        <td>{{item.cantidadVendida}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else class="mt-5">
            <div class="alert alert-info" role="alert">
                No tienes productos comprados.
                <button type="button" class="btn btn-dark" @click="$router.push({name: 'Ventas'})">Ir a Ventas</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Total',
    data() {
        return {
            valores: 0
        }
    },
    computed: {
        ...mapGetters(['enviandoTotalVenta'])
    },
    filters: {
        formatoPrecio(precio){
            return new Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(parseFloat(precio));
        }
    },
}
</script>

<style>

</style>