<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{{enviandoNombre}}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'Home'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'Login'}">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'Registro'}">Registro</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="activandoSOut" href="#" tabindex="-1" v-if="!existeUser" @click="signOut">Sign Out</a>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="activandoSOut" :to="{name: 'Administracion'}" v-if="!existeUser">Administracion</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="activandoSOut" :to="{name: 'Pacientes'}" v-if="!existeUser">Pacientes</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="activandoSOut" :to="{name: 'Perfil'}" v-if="!existeUser">Perfil</router-link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from "vuex";

export default {
    name: 'NavBar',
    computed: {
        ...mapGetters(['enviandoUser']),
        existeUser(){
            return !this.enviandoUser;
        },
        activandoSOut(){
            return this.existeUser ? 'disabled' : '';
        },
        enviandoNombre(){
            if (this.enviandoUser) {
                return this.enviandoUser.displayName
            } else {
                return 'SAM'
            }
        }
    },
    methods: {
        // este metodo se utiliza para cerrar la sesión de usuario activa al momento.
        signOut(){
            firebase.auth().signOut().then(() => {
                console.log("cerro al sesion");
                this.$router.replace({name: 'Login'});
            }).catch((error) => {
                console.error(error);
            });
        }
    },
}
</script>

<style>

</style>