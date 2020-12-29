<template>
    <div class="container my-5">
        <h2>Editando a: {{nombre}}</h2>
        <div>
            <form @submit.prevent="actualizarPaciente">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre del paciente</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="nombre">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Diagnostico</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" v-model="diagnostico">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Edad</label>
                    <input type="text" class="form-control" id="edad" v-model="edad">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Prevision</label>
                    <input type="text" class="form-control" id="prevision" v-model="prevision">
                </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
        </div>
        
        <div class="text-center my-5">
            <button type="button" class="btn btn-info" @click="$router.go(-1)">Regresar</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Editando',
    props: ['id'],
    data() {
        return {
            nombre: '',
            diagnostico: '',
            edad: '',
            prevision: '',
        }
    },
    computed: {
        ...mapGetters(['enviandoPacientes'])
    },
    methods: {
        actualizarPaciente(){
            if (this.nombre.length >= 4 && this.edad && this.diagnostico && this.prevision) {
                let datos = {
                    nombre: this.nombre,
                    edad: this.edad,
                    diagnostico: this.diagnostico,
                    prevision: this.prevision,
                    idDoc: this.id
                };
                this.$store.dispatch('actualizandoPaciente',datos);
                setTimeout(()=>{
                    this.$router.push({name: 'Pacientes'});
                },1000);
            } else {
                console.log("No se puede actualizar el paciente");
            }
        }
    },
    mounted(){
        let datos = this.enviandoPacientes.find(curso => curso.idDoc === this.id);
        if (datos !== undefined) {
            this.nombre = datos.nombre;
            this.diagnostico = datos.diagnostico;
            this.edad = datos.edad;
            this.prevision = datos.prevision;
        } else {
            console.log("No existe el paciente");
            setTimeout(()=>{
                this.$router.push({name: 'Pacientes'});
            },500);
        }
    }
}
</script>

<style>

</style>