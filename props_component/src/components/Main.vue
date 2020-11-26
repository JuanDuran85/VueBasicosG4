<template>
    <div>
        <!-- se agrega el componente hijo, se envia la informacion mediante props y se reciben los eventos con informacion mediante v-on o @ -->
        <Card :infoUsers="users" @eliminarUser="deleteUser" @agregandoUsuario="agregarUsuario"/>
    </div>
</template>

<script>
/* se importan los componentes y librerias a usuar */
import Card from './mainHijos/Card.vue';
import Swal from 'sweetalert2';

export default {
    name: 'Main',
    data() {
        return {
            users: [
                {   
                    id: 1,
                    image: "http://lorempixel.com/640/480/people",
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz",
                    address: {
                        street: "Kulas Light",
                        suite: "Apt. 556",
                        city: "Gwenborough",
                        zipcode: "92998-3874",
                    },
                    phone: "1-770-736-8031 x56442",
                    website: "hildegard.org",
                    company: {
                        name: "Romaguera-Crona",
                        catchPhrase: "Multi-layered client-server neural-net",                    
                        bs: "harness real-time e-markets"
                    }
                },
                {
                    id: 2,
                    image: "http://lorempixel.com/640/480/people",
                    name: "Ervin Howell",
                    username: "Antonette",
                    email: "Shanna@melissa.tv",
                    address: {
                        street: "Victor Plains",
                        suite: "Suite 879",
                        city: "Wisokyburgh",
                        zipcode: "90566-7771",
                    },
                    phone: "010-692-6593 x09125",
                    website: "anastasia.net",
                    company: {
                        name: "Deckow-Crist",
                        catchPhrase: "Proactive didactic contingency",
                        bs: "synergize scalable supply-chains"
                    }
                },
                {
                    id: 3,
                    image: "http://lorempixel.com/640/480/people",
                    name: "Clementine Bauch",
                    username: "Samantha",
                    email: "Nathan@yesenia.net",
                    address: {
                        street: "Douglas Extension",
                        suite: "Suite 847",
                        city: "McKenziehaven",
                        zipcode: "59590-4157",
                    },
                    phone: "1-463-123-4447",
                    website: "ramiro.info",
                    company: {
                        name: "Romaguera-Jacobson",
                        catchPhrase: "Face to face bifurcated interface",
                        bs: "e-enable strategic applications"
                    }
                },
                {
                    id: 4,
                    image: "http://lorempixel.com/640/480/people",
                    name: "Patricia Lebsack",
                    username: "Karianne",
                    email: "Julianne.OConner@kory.org",
                    address: {
                        street: "Hoeger Mall",
                        suite: "Apt. 692",
                        city: "South Elvis",
                        zipcode: "53919-4257",
                    },
                    phone: "493-170-9623 x156",
                    website: "kale.biz",
                    company: {
                        name: "Robel-Corkery",
                        catchPhrase: "Multi-tiered zero tolerance productivity",
                        bs: "transition cutting-edge web services"
                    }
                },
                {
                    id: 5,
                    image: "http://lorempixel.com/640/480/people",
                    name: "Chelsey Dietrich",
                    username: "Kamren",
                    email: "Lucio_Hettinger@annie.ca",
                    address: {
                        street: "Skiles Walks",
                        suite: "Suite 351",
                        city: "Roscoeview",
                        zipcode: "33263",
                    },
                    phone: "(254)954-1289",
                    website: "demarco.info",
                    company: {
                        name: "Keebler LLC",
                        catchPhrase: "User-centric fault-tolerant solution",
                        bs: "revolutionize end-to-end systems"
                    }
                },
                {
                    id: 6,
                    image: "http://lorempixel.com/640/480/people",
                    name: "Mrs. Dennis Schulist",
                    username: "Leopoldo_Corkery",
                    email: "Karley_Dach@jasper.info",
                    address: {
                        street: "Norberto Crossing",
                        suite: "Apt. 950",
                        city: "South Christy",
                        zipcode: "23505-1337",
                    },
                    phone: "1-477-935-8478 x6430",
                    website: "ola.org",
                    company: {
                        name: "Considine-Lockman",
                        catchPhrase: "Synchronised bottom-line interface",
                        bs: "e-enable innovative applications"
                    }
                },
            ]
        }
    },
    components: {
        /* se llama al componente hijo */
        Card
    },
    methods: {
        /* los metodos se activan cuando ocurre un evento en el hijo y los envia mediante el emit */

        /* metodo para borrar la informacion de un usuario en especifico */
        deleteUser(index){
            this.users.splice(index,1);
        },
        /* metodo para agregar un usuario a la data */
        agregarUsuario(data){
            this.users.push(data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Usuario agregado con éxito',
                showConfirmButton: false,
                timer: 2000
            })
        }
    },
}
</script>

<style scoped>

</style>