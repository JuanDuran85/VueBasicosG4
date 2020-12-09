<template>
  <div class="container text-center">
    <h1 class="mt-5">{{enivandoTitulo}}</h1>
    <h2>{{enivandoSubTitulo}}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Inicio',
  computed: {
    ...mapGetters(['enivandoTitulo','enivandoSubTitulo'])
/*     titulo(){
      return this.$store.getters.enivandoTitulo;
    },
    subTitulo(){
      return this.$store.getters.enivandoSubTitulo;
    } */
  }
}
</script>
