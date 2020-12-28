<template>
    <div class="container my-5">
        <h2>Editando a: {{nombre}}</h2>
        <div>
            <form @submit.prevent="actualizarCurso">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre del Curso</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="nombre">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Duración</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" v-model="duracion">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Escuela</label>
                    <input type="text" class="form-control" id="escuela" v-model="escuela">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">URL imagen</label>
                    <input type="text" class="form-control" id="imagen" v-model="urlImagen">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="favorito">
                    <label class="form-check-label" for="exampleCheck1">Favorito {{favorito ? 'Si' : 'No'}}</label>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck2" v-model="completado">
                    <label class="form-check-label" for="exampleCheck2">Completado {{completado ? 'Si' : 'No'}}</label>
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
            duracion: '',
            urlImagen: '',
            escuela: '',
            favorito: false,
            completado: false,
        }
    },
    computed: {
        ...mapGetters(['enviandoCursos'])
    },
    methods: {
        actualizarCurso(){
            if (this.nombre.length >= 4 && this.duracion && this.urlImagen && this.escuela) {
                let datos = {
                    nombre: this.nombre,
                    duracion: this.duracion,
                    urlImagen: this.urlImagen,
                    escuela: this.escuela,
                    favorito: this.favorito,
                    completado: this.completado,
                    idDoc: this.id
                };
                this.$store.dispatch('actualizandoCurso',datos);
                setTimeout(()=>{
                    this.$router.push({name: 'Administracion'});
                },1000);
            } else {
                console.log("No se puede actualizar el curso");
            }
        }
    },
    mounted(){
        let datos = this.enviandoCursos.find(curso => curso.idDoc === this.id);
        if (datos !== undefined) {
            this.nombre = datos.nombre;
            this.escuela = datos.escuela,
            this.completado = datos.completado,
            this.favorito = datos.favorito,
            this.duracion = datos.duracion,
            this.urlImagen = datos.urlImagen
        } else {
            console.log("No existe el curso");
            setTimeout(()=>{
                this.$router.push({name: 'Administracion'});
            },1000);
        }
    }
}
</script>

<style>

</style>