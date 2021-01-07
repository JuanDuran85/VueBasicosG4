<template>
  <v-container>
    <h1>Login</h1>
    <div>
      <v-form ref="form" v-model="valid" lazy-validation>
        
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="password" :counter="20" :rules="passwordRules" label="Password" required type="password"></v-text-field>

        <div class="mt-5">
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
            Validate
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Reset Form
          </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import Swal from 'sweetalert2';
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => (v && v.length >= 6) || 'La contraseña debe ser mayor o igual que 6 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'El correo Electrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo Electrónico debe ser valido',
      ],
    }
  },
  methods: {
    validate () {
        this.$refs.form.validate()
        if(this.$refs.form.validate()){
          firebase.auth().signInWithEmailAndPassword(this.email,this.password)
          .then(()=>{
            setTimeout(()=>{
              this.$router.replace({name: 'Home'}).catch(error => {
                console.info(error.message);
              });
            },500);
          })
          .catch(error =>{
            console.error(error);
          })
        }else{
          console.log("no permitido");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar datos permitidos!',
            footer: 'Intenta nuevamente'
          })
        }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>