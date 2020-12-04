<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
          {{ todos[index] }}
          
        <button @click="deleteItem(index)">eliminar</button>
        </li>
    </ul>
  </div>
</template>
<script>
export default { 
  name: "items",
  props: {
    todos: Array
  },
  methods: {
      deleteItem(index){
          this.$emit('deleteItem', index);
      }
  }
};
</script>

<style scoped>
</style>
