<template>
    <v-container>
        <div class="my-8 d-flex justify-center">
            <h2 class="my-5 text-center display-3 mx-4">Administración</h2>
             <!-- modal para registrar curso -->
            <section class="my-auto">
                <v-dialog v-model="dialog" persistent max-width="600px" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">Agregar Curso</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Agregando Curso</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-text-field v-model="nombre" :counter="20" :rules="nombreRules" label="Nombre" required></v-text-field>
                                    <v-text-field v-model="url" :rules="urlRules" label="Imagen del curso" required></v-text-field>
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
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Cerrar
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Agregar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </section>
        </div>
        <!-- Tabla para administrar cursos-->
        <div>
            <v-data-table :headers="headers" :items="enviandoCursos" :items-per-page="5" item-key="nombre" class="elevation-1" :footer-props="{ showFirstLastPage: true, firstIcon: 'mdi-arrow-collapse-left', lastIcon: 'mdi-arrow-collapse-right', prevIcon: 'mdi-minus', nextIcon: 'mdi-plus'}">

                <template v-slot:item.precio="{ item }">
                    <v-chip color="green" dark>
                        {{ item.precio | formatoNum}}
                    </v-chip>
                </template>

                <template v-slot:item.fecharegistro="{ item }">
                    <v-chip color="green" dark>
                        {{ item.fecharegistro | formatoFecha}}
                    </v-chip>
                </template>
            
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'AdministraList',
    data() {
        return {
            nombre: '',
            url: '',
            nombreRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            dialog: false,
            headers: [
                {
                    text: 'Curso',
                    align: 'start',
                    value: 'nombre',
                },
                { text: 'Cupos', value: 'cupos' },
                { text: 'Duración', value: 'duracion' },
                { text: 'Precio', value: 'precio' },
                { text: 'Terminado', value: 'terminado' },
                { text: 'Fecha', value: 'fecharegistro' },
            ],
        }
    },
    computed: {
    ...mapGetters(['enviandoCursos'])
    },
    filters: {
        formatoNum(valor){
            return new Intl.NumberFormat('cl', {style: 'currency', currency: 'CLP'}).format(valor);
        },
        formatoFecha(valor){
            let fecha = valor.toDate().getDate() + "-" + valor.toDate().getMonth()+1 + "-" + valor.toDate().getFullYear();
            return fecha; // toDate() metodo propio de firebase para trasnformar la base de datos con fechas 
        }
    }
}
</script>

<style>

</style>