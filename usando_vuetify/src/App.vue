<template>
  <v-app>
    <TheNavBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
export default {
  name: 'App',
  components: {
    TheNavBar
  },
  mounted() {
    this.$store.dispatch('traerInfoApi',1);
  },
};
</script>
