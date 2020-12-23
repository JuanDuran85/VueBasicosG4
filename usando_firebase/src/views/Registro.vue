<template>
    <div class="container my-5">
        <h1 class="my-5 text-center">Registrando Usuario</h1>
        <form @submit.prevent="registrarUsuario">
            <div class="mb-3">
                <label for="displayNombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="displayNombre" v-model="displayName">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <div class="mb-3">
                <label for="photoURLID" class="form-label">Photo URL</label>
                <input type="text" class="form-control" id="photoURLID" v-model="photoURL">
            </div>
            <button type="submit" class="btn btn-primary">Registrar</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Registro',
  data() {
      return {
          email: '',
          displayName: '',
          password: '',
          photoURL: ''
      }
  },
  methods: {
      registrarUsuario(){
          if (this.email && this.displayName.length > 2 && this.password.length >= 6 && this.photoURL) {
              console.log("listo para registrar");
              //este metodo permita crear un usuario con el correo y la contraseña
              firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((respuesta) => {
                    //este metodo permite actualizar el nombre y la imagen del usuario
                    return respuesta.user.updateProfile({
                            displayName: this.displayName,
                            photoURL: this.photoURL,
                        }).then(() => {
                            this.email = ""; 
                            this.password = "";
                            this.displayName = "";
                            this.photoURL = "";
                            console.log("usuario registrado...");
                            this.$router.push({name: 'Home'}); 
                        }).catch((error) => {
                            console.error(error);
                        });
                })
                .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                });
          } else {
              console.log("no se puede...");
          }
      }
  },
}
</script>

<style>

</style>