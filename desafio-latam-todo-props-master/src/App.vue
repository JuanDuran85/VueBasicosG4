<template>
  <div class="todo-list">
    <div class="todo-list-container">
      <img class="todo-list-img" :src="img" />
      <form>
        <label for="todoitem">Tarea</label>
        <input type="text" v-model="input" id="todoitem" placeholder="ingresa nueva tarea" />
        <button type="button" v-on:click.prevent="add()">Añade</button>
      </form>
      <Items :todos="this.todos" @deleteItem="deleteElement" />
    </div>
  </div>
</template>

    <script>
import Items from "./Items.vue";
export default {
  name: "App",
  components: { Items },
  data() {
    return {
      img:
        "http://blog.desafiolatam.com/wp-content/uploads/2015/03/desafio-latam-logonegro.png",
      todos: [],
      input: ""
    };
  },
  methods: {
    add() {
      this.todos.push(this.input);
      this.input = "";
    },
    deleteElement(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.todo-list {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin: 10px;
}

.todo-list-container {
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid gray;
  padding: 20px;
  align-items: center;
}
h2 {
  color: darkgray;
}
.todo-list-img {
  width: 25%;
  height: 25%;
  object-fit: contain;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
}
</style>