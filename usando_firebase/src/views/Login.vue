<template>
  <div class="my-5 container">
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
      <a type="button" class="btn btn-primary mx-4" @click="recuperarEmail">Olvide mi Contraseña</a>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginUser(){
      if (this.email && this.password.length >= 6) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log(result.user.uid);
          console.log(result.user.photoURL);
          console.log(result.user.email);
          console.log(result.user.displayName);
          console.log(result.user.emailVerified);
          console.log("login");
          this.$router.push({name: 'Home'});
        })
        .catch((error) => {
          console.error(error.code);
          console.error(error.message);
        });
      } else {
        console.log("no se puede");
      }
    },
    recuperarEmail(){
      firebase.auth().sendPasswordResetEmail(this.email).then(() => {
        console.log("correo enviado.");
      }).catch((error) => {
        console.error(error);
      });

    }
  },
}
</script>
