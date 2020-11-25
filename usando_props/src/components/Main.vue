<template>
    <main>
        <header>
        </header>    
        <section class="container my-4 text-justify">
            <h2>{{mensajeT}}</h2>
            <p v-text="parrafoProps"></p>
        </section>
        <Table :dataUsers="usuarios" @eliminarUsuer="borrarUsuario"/>
    </main>
</template>

<script>
import Table from './mainHijos/Table.vue';

export default {
    name: 'Main',
    data() {
        return {
            usuarios: [
                {id: 1, name: 'Lilyan', lastname: 'Bartoletti', address: 'Irma Corner'},
                {id: 2, name: 'Micah', lastname: 'Hoppe', address: 'Gracie Curve'},
                {id: 3, name: 'Forest', lastname: 'Lowe', address: 'Osinski Crest'},
                {id: 4, name: 'Karolann', lastname: 'Rowe', address: 'Crooks Dam'},
                {id: 5, name: 'Brice', lastname: 'Altenwerth', address: 'Ismael Trail'},
                {id: 6, name: 'Davion', lastname: 'Hand', address: 'Tracy Rapid'},
                {id: 7, name: 'Oscar', lastname: 'Ankunding', address: 'Jamel Brook'},
                {id: 8, name: 'Madge', lastname: 'Luettgen', address: 'Willms Manor'},
                {id: 9, name: 'Emely', lastname: 'Zieme', address: 'Bernhard Pike'},
            ]
        }
    },
    props: ['mensajeT','parrafoProps'],
    components: {
        Table
    },
    methods: {
        borrarUsuario(index){
            console.log(index);
            this.usuarios.splice(index,1);
        }
    },
}
</script>

<style scoped>
    header {
        background-image: url('../assets/400540_558437.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 50vh;
        background-position: center top;
        opacity: 0.4;
    }
</style>