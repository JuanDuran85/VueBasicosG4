<template>
    <div class="container text-center">
        <h1>Busquedas...</h1>
        <h3>Información sobre los Juegos</h3>
        <ul>
            <li>Cantidad total de Juegos: {{traerCantidadTotalJuegos}}</li>
        </ul>
        <div class="mt-5">
            <table class="table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Destacado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in traerListaJuegos" :key="index" :style="{backgroundColor: item.color}">
                        <td>{{item.codigo}}</td>
                        <td>{{item.nombre}}</td>
                        <td>{{item.stock}}</td>
                        <td>{{item.precio}}</td>
                        <td class="w-25"><img :src="item.destacado == 'true' ? 'https://i.pinimg.com/originals/2c/32/3e/2c323e003f57c18935c92679f65b639a.png' : 'https://w7.pngwing.com/pngs/976/219/png-transparent-computer-icons-smiley-emoticon-sad-face-miscellaneous-emoji-facial-expression.png'" alt="imagen" class="img-fluid">  {{}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Busquedas',
    computed: {
        traerListaJuegos(){
            return this.$store.getters.enviarListaJuegos;
        },
        traerCantidadTotalJuegos(){
            return this.$store.getters.cantidadJuegosTotales
        }
    }
}
</script>

<style>

</style>