<template>
  <div>
    <ListaPeliculas/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaPeliculas from '@/components/ListaPeliculas.vue'

export default {
  name: 'Home',
  components: {
    ListaPeliculas
  }
}
</script>
