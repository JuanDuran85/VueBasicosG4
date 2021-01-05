<template>
    <div>
        <b-container class="my-5">
            <h2>Login Usuario</h2>
            <div>
                <b-form @submit.prevent="loginUser" @reset="onReset" v-if="showFormReg">
                    
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

                    <b-button type="submit" variant="primary">Login</b-button>
                    <b-button type="reset" variant="danger" class="mx-3">Reset</b-button>
                </b-form>
                <div class="divBoton">
                    <b-button type="reset" variant="info" class="botonRC" @click="recuperarClave">Recuperar Clave</b-button>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            showFormReg: true
        }
    },
    methods: {
        loginUser(){
            if (this.form.password.length > 5 && this.form.email) {
                firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
                .then(() => {
                    this.$notify({
                        title: 'Success',
                        message: 'Ingreso con éxito',
                        type: 'success'
                    });
                    this.$router.push({name: 'Home'})
                })
                .catch(() => {
                    this.$notify.error({
                        title: 'Error de Ingreso',
                        message: 'Error en los datos ingresados',
                        position: 'top-right',
                    });
                });
            } else {
                this.$notify.error({
                    title: 'Error de Ingreso',
                    message: 'Error en los datos ingresados',
                    position: 'top-right',

                });
            }
        },
        onReset(event){
            event.preventDefault()
            this.form.email = '';
            this.form.password = '';

        // Trick to reset/clear native browser form validation state
            this.showFormReg = false
            this.$nextTick(() => {
                this.showFormReg = true
            });
        },
        recuperarClave(){
            this.$prompt('Ingresa tu Correo Electrónico', 'Tip', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancelar',
                inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputErrorMessage: 'Correo invalido'
            }).then(({ value }) => {
                firebase.auth().sendPasswordResetEmail(value).then(()=> {
                    this.$message({
                        type: 'success',
                        message: 'La contraseña fue enviada a:' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'No se pudo enviar el correo. Verifica los datos'
                    }); 
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Input canceled'
                });       
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

<style lang="scss" scoped>
    
    .divBoton {
        text-align: center;
        width: 100%;
        margin: 0 auto;
        .botonRC {
            margin: 40px auto;
        }
    }
</style>