import Vue from 'vue'
import VueRouter from 'vue-router'
import Biografia from '../views/Biografia.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Biografia',
    component: Biografia
  },
  {
    path: '/estudios',
    name: 'Estudios',
    component: () => import(/* webpackChunkName: "Estudios" */ '../views/Estudios.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue')
  },
  {
    path: '/usuario/:nombre',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "Usuario" */ '../views/Usuario.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import(/* webpackChunkName: "Proyectos" */ '../views/Proyectos.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
