<template>
  <div class="container text-center mt-4">
    <h1>Información del Usuario</h1>
    <div class="mt-5" v-for="(item,index) in user" :key="index">
      <div class="card" :class="[(item.gender == 'female') ? 'female' : 'male']">
        <img :src="item.picture.large" class="card-img-top" :alt="item.id.name">
        <div class="card-body">
          <h5 class="card-title">{{fullName}}</h5>
          <p class="card-text">{{item.location.timezone.description}}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Email: {{item.email}}</li>
          <li class="list-group-item">Phone: {{item.phone}}</li>
          <li class="list-group-item">Username: {{item.login.username}}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Usuarios',
  props: {
    user: {
      type: Array,
      required: true,
    }
  },
  computed: {
    fullName(){
      return this.user[0].name.title + " " + this.user[0].name.first + " " + this.user[0].name.last
    }
  },
}
</script>

<style scoped>
  .female{
    background-color: fuchsia;
  }
  .male{
    background-color: blue;
  }
</style>
