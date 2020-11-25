<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Address</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in dataUsers" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.lastname}}</td>
                    <td>{{item.address}}</td>
                    <td><button type="button" class="btn btn-primary" @click="eliminando(index)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        dataUsers: {
            type: Array,
            required: true,
            default(){
                return [
                    {id: 1, name: 'No tiene', lastname: 'no tiene', address: 'No tiene'}
                ]
            } 
        }
    },
    methods: {
        eliminando(index){
            this.$emit('eliminarUsuer',index);
        }
    },
}
</script>

<style>

</style>