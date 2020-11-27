<template>
  <div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      datosApi: []
    }
  },
  components: {
    HelloWorld
  },
  created() {
    fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(result => console.log(result))
    .catch(error => console.error(error));
  }
}
</script>

<style>

</style>
