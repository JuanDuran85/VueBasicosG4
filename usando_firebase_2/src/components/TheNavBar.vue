<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
                    <b-nav-item :to="{name: 'Login'}" data-cy="loginBoton">Login</b-nav-item>
                    <b-nav-item :to="{name: 'Registro'}">Registro</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Busqueda</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown right v-if="enviandoUser" >
                        <template #button-content>
                            <em class="ml-2" data-cy="usuarioNombre">{{enviandoUser.displayName}}</em>
                            <div class="foto">
                                <img :src="enviandoUser.photoURL" alt="imagen">
                            </div>
                        </template>
                        <b-dropdown-item :to="{name: 'Administracion'}">Administración</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Favoritos'}" data-cy="visitarFav">Favoritos</b-dropdown-item>
                        <b-dropdown-item @click="cerrarSesion" data-cy="salidaBoton">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from 'firebase';

export default {
    name: 'TheNavBar',
    computed: {
        ...mapGetters(['enviandoUser']),
    },
    methods: {
        cerrarSesion(){
            firebase.auth().signOut().then(() => {
                this.$message({
                    message: 'Sesión cerrada con éxito.',
                    type: 'success'
                });
                this.$router.replace({name: 'Login'});
                this.$store.dispatch('borrarFavoritosLocal');
                this.$store.dispatch('borrarOpinionesLocal');
            }).catch((error) => {
                console.error(error);
            });
        }
    }
}
</script>

<style scoped lang="scss">
.foto{
    float: left;
    img{
        width: 20px;
        height: 20px;
    }
}    
</style>