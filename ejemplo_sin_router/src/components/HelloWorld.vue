<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corporis dolores eveniet nostrum itaque veniam ullam ad aut architecto, recusandae officiis. Porro error dolorum eius totam fuga alias officiis reprehenderit.</p>
    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis molestiae eos laboriosam hic eligendi, corrupti quia magni odio id dicta cumque rem autem in necessitatibus deleniti voluptate doloremque. Ex, iusto!</h4>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
