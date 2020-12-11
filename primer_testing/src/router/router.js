import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tareas',
    name: 'Tareas',
    component: () => import(/* webpackChunkName: "Tareas" */ '../views/Tareas.vue')
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import(/* webpackChunkName: "Favoritos" */ '../views/Favoritos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
