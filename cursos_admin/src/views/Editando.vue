<template>
    <v-container>
        <h2 class="my-5 text-center display-3">Editando el curso: {{nombre}}</h2>
        <div>
            <v-form ref="form" v-model="valid" lazy-validation>
                <!-- nombre del curso -->
                <v-text-field v-model="nombre" :counter="20" :rules="nombreRules" label="Nombre" required></v-text-field>
                <!-- imagen del curso -->
                <v-text-field v-model="imagen" label="URL de la Imagen del curso" required type="url"></v-text-field>
                <!-- cupos del curso -->
                <v-text-field v-model="cupos" :rules="cuposRules" label="Cupos del curso" required></v-text-field>
                <!-- duracion del curso -->
                <v-text-field v-model="duracion" label="Duración del curso" required></v-text-field>
                <!-- precio del curso -->
                <v-text-field v-model="precio" :rules="precioRules" label="Precio del curso" required></v-text-field>
                <!-- id del curso -->
                <v-text-field v-model="idCurso" label="Id del curso" required></v-text-field>
                <v-text-field v-model="fecharegistro" label="Fecha de Registro" required type="date"></v-text-field>

                <v-switch v-model="terminado" :label="terminado ? 'Terminado: Si' : 'Terminado: No'" color="indigo" :true-value="terminado" hide-details></v-switch>

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
                    <v-btn color="primary" class="ml-4" @click="$router.go(-1)">
                        Regresar
                    </v-btn>
                </div>
            </v-form>
        </div>
    </v-container>
</template>

<script>
import Swal from 'sweetalert2';
import {mapGetters} from 'vuex';

export default {
    name: 'Editando',
    props: ['id'],
    computed: {
    ...mapGetters(['enviandoCursos']),
    },
    data() {
        return {
            valid: true,
            nombre: '',
            imagen: '',
            idCurso: '',
            cupos: 0,
            cuposRules: [
                v => !!v || 'Cupos es requerido',
                v => (v && v.length >= 0 && /\d/gmi.test(v) && v >= 0) || 'Solo deben ser numeros positivos',
            ],
            duracion: '',
            precio: 0,
            precioRules: [
                v => !!v || 'Precio es requerido',
                v => (v && v.length >= 0 && /\d/gmi.test(v) && v >= 0) || 'Solo deben ser numeros positivos',
            ],
            nombreRules: [
                v => !!v || 'Name is required',
                v => (v && v.length >= 2) || 'Name must be less than 10 characters',
            ],
            dialog: false,
            fecharegistro: '',
            terminado: false,
        }
    },
    mounted() {
        let cursoEncontrado = this.enviandoCursos.find(result => result.idDoc === this.id);
        if (cursoEncontrado !== undefined) {
            this.cupos = parseInt(cursoEncontrado.cupos);
            this.duracion = cursoEncontrado.duracion;
            this.idCurso = cursoEncontrado.idCurso;
            this.idDoc = cursoEncontrado.idDoc;
            this.imagen = cursoEncontrado.imagen;
            this.nombre = cursoEncontrado.nombre;
            this.precio = parseInt(cursoEncontrado.precio); 
            this.terminado = cursoEncontrado.terminado;
            let fecha = cursoEncontrado.fecharegistro.toDate();
            this.fecharegistro = fecha.getFullYear()+"-"+ fecha.getMonth()+1 + "-0"+fecha.getDate() ;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No existe el curso',
                footer: 'Intenta nuevamente'
            });
            setTimeout(()=>{
                this.$router.replace({name: 'Administracion'});
            },1000);
        }
    },
    methods: {
        validate () {
            this.$refs.form.validate();
            if (this.$refs.form.validate()) {
                let cursoNuevo = {
                    nombre: this.nombre,
                    idCurso: this.idCurso,
                    precio: parseFloat(this.precio),
                    cupos: parseInt(this.cupos),
                    imagen: this.imagen,
                    duracion: this.duracion,
                    terminado: this.terminado,
                    fecharegistro: new Date(this.fecharegistro),
                    idDoc: this.idDoc
                };
                console.log(cursoNuevo);
                this.$store.dispatch('actualizandoCurso',cursoNuevo).then(()=>{
                    Swal.fire(
                        'Muy Bien',
                        'Curso Actualizado con éxito',
                        'success'
                    );
                    this.reset();
                    setTimeout(()=>{
                        this.$router.replace({name: 'Administracion'});
                    },1000);
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Existen errores en los datos',
                    footer: 'Intenta nuevamente'
                });
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

<style>

</style>