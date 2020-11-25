<template>
    <div>
       <h1>Entrada de datos en formulario desde componente hijo</h1>
       <h4>Ingresa un nombre: </h4>
       <input type="text" placeholder="Nombre..." v-model="nombre">
       <div class="mt-4">
            <button type="button" class="btn btn-primary" @click="mostrarNombre">Agregar</button>
       </div>
       <div v-show="listaNombres.length > 0" class="mt-5 bg-light text-left">
           <ul class="boton">
               <li v-for="(nombre,index) in listaNombres" :key="index">{{index+1}} - {{nombre}} <button type="button" class="btn btn-danger btn-sm" @click="eliminarNombre(index)">Eliminar</button></li>
           </ul>
           <p class="border border-top">Total Nombres: {{listaNombres.length}}</p>
       </div>
    </div>
</template>

<script>
export default {
    name: 'Entrada',
    data() {
        return {
            nombre: '',
            listaNombres: []
        }
    },
    methods: {
        mostrarNombre(){
            if (this.nombre) {
                this.listaNombres.push(this.nombre);
                this.nombre = "";
            } else {
                console.log("no tiene nombre");
            }
        },
        eliminarNombre(index){
            this.listaNombres.splice(index,1);
        }
    },
}
</script>

<style scoped>
    .boton{
        display: flex;
        flex-direction: column;
    }
</style>