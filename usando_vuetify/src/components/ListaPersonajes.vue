<template>
  <v-container>
    <h1 class="my-8 text-center display-4">Lista de Juegos</h1>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="4" xl="4" v-for="(item,index) in enviandoGamesResult" :key="index">
            <v-card class="mx-auto" max-width="400">
              <v-img :src="item.background_image" height="200px"></v-img>

              <v-card-title>
                {{item.name}}
              </v-card-title>

              <v-card-subtitle>
                Rating: {{item.rating}}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange lighten-2" text>
                  Ver Más
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show" :data-target="'#juego-'+index">
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show" :id="'juego'+index">
                  <v-divider></v-divider>
                  <v-card-text>
                    <ul>
                      <li>Fecha de estreno: {{item.released}}</li>
                      <li v-for="(plataforma,index) in item.platforms" :key="index">{{plataforma.platform.name}}</li>
<!--                       <li><span v-for="(plataforma,index) in item.platforms" :key="index">{{ plataforma.platform.name}}</span></li> -->
                    </ul>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListaPersonajes',
  computed: {
    ...mapGetters(['enviandoGamesResult']),
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>
