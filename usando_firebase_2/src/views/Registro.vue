<template>
    <b-container class="my-5">
        <h2>Registrate como Usuario de Peliculas Web - Tu sitio de Peliculas</h2>
        <div>
             <b-form @submit.prevent="registrouser" @reset="onReset" v-if="showFormReg">
                
                <b-form-group id="input-group-1" label="Tu Nombre y Apellido:" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.displayName" placeholder="Ingresa tu nombre y apellido" required ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Correo Electrónico:" label-for="input-2" description="Tú información no será compartida.">
                    <b-form-input id="input-2" v-model="form.email" type="email" placeholder="Ingresa tu correo electrónico" required ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                    <b-form-input v-model="form.password" :state="validation" id="feedback-user" type="password"></b-form-input>
                    <b-form-invalid-feedback :state="validation">
                        Your user ID must be 6-12 characters long.
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validation">
                        Looks Good.
                    </b-form-valid-feedback>
                </b-form-group>
                
                <b-form-group id="input-group-4" label="URL de Imagen" label-for="input-4">
                    <b-form-input id="input-4" v-model="form.photoURL" placeholder="Ingresa la url de tu foto" required ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary" class="mx-3">Registrar</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </div>
    </b-container>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Registro',
    data() {
        return {
            form: {
                email: '',
                displayName: '',
                password: '',
                photoURL: ''
            },
            showFormReg: true
        }
    },
    methods: {
        registrouser(){
            if (this.form.email && this.form.displayName.length > 2 && this.form.photoURL && this.form.password.length > 5) {
                firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then((respuesta) => {
                    //este metodo permite actualizar el nombre y la imagen del usuario
                    return respuesta.user.updateProfile({
                        displayName: this.form.displayName,
                        photoURL: this.form.photoURL,
                    }).then(() => {
                        this.form.email = ""; 
                        this.form.password = "";
                        this.form.displayName = "";
                        this.form.photoURL = "";
                        this.$notify({
                            title: 'Success',
                            message: 'Usuario Registrado con exito',
                            type: 'success'
                        });
                        this.$store.dispatch('registrarUsuario',respuesta.user);
                        this.$router.push({name: 'Home'}); 
                    }).catch((error) => {
                        console.error(error);
                        this.$notify.error({
                            title: 'Error',
                            message: 'No se puede registrar. Revisa los valores del formulario'
                        })
                    });
                })
                .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                    this.$notify.error({
                        title: 'Error',
                        message: 'No se puede registrar. Revisa los valores del formulario',
                        duration: 5000
                    })
                });
            } else {
                this.$notify.error({
                    title: 'Error',
                    message: 'No se puede registrar. Revisa los valores del formulario',
                    duration: 5000
                })
            }
        },
        onReset(event){
            event.preventDefault()
            this.form.email = '';
            this.form.displayName = '';
            this.form.photoURL = '';
            this.form.password = '';

        // Trick to reset/clear native browser form validation state
            this.showFormReg = false
            this.$nextTick(() => {
                this.showFormReg = true
            });
        }
    },
    computed: {
      validation() {
        return this.form.password.length > 5 && this.form.password.length < 13
      }
    }
}
</script>

<style>

</style>