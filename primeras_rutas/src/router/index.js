import Vue from 'vue'
import VueRouter from 'vue-router'
import Biografia from '../views/Biografia.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Biografia',
    component: Biografia,
    alias: ['/inicio','/principio','/mipagina']
  },
  {
    path: '/redireccion',
    name: 'Redireccion',
    component: () => import(/* webpackChunkName: "Redireccion" */ '../views/Redireccion.vue'),
    redirect: '/nueva_vista'
  },
  {
    path: '/nueva_vista',
    name: 'NuevaVista',
    component: () => import(/* webpackChunkName: "NuevaVista" */ '../views/NuevaVista.vue'),
  },
  {
    path: '/estudios',
    name: 'Estudios',
    component: () => import(/* webpackChunkName: "Estudios" */ '../views/Estudios.vue'),
    alias: ['/estudio','/study','/formacion']
  },
  {
    path: '/contacto/:idContacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue'),
    props: (ruta)=>({ 
      idContacto: `El id del contaco es: ${ruta.params.idContacto}`
    })
  },
  {
    path: '/usuario/:nombre',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "Usuario" */ '../views/Usuario.vue'),
    props: true,
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import(/* webpackChunkName: "Proyectos" */ '../views/Proyectos.vue'),
    props: {
      idProyecto: 'EYHFUD35456JK'
    }
  },
  {
    path: '*',
    /* redirect: '/' */
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
