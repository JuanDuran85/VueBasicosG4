import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    alias: ['/login'],
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      requiresAuth: true // el meta se utiliza para las rutas que se quieran resguardar (Navigation Guards)
    }
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Registro.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "Perfil" */ '../views/Perfil.vue')
  },
  {
    path: '/editando/:id',
    name: 'Editando',
    props: true,
    component: () => import(/* webpackChunkName: "Editando" */ '../views/Editando.vue')
  },
  {
    path: '/editar-paciente/:id',
    name: 'EditarPaciente',
    props: true,
    component: () => import(/* webpackChunkName: "Editando" */ '../views/EditarPaciente.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "administracion" */ '../views/Administracion.vue'),
    meta: {
      requiresAuth: true // el meta se utiliza para las rutas que se quieran resguardar (Navigation Guards)
    }
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: () => import(/* webpackChunkName: "Pacientes" */ '../views/Pacientes.vue'),
    meta: {
      requiresAuth: true // el meta se utiliza para las rutas que se quieran resguardar (Navigation Guards)
    }
  },
  {
    path: '*',
    redirect: ['/']
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// guarda de navegación 
router.beforeEach((to,from,next)=>{
  let usuario = firebase.auth().currentUser; // traemos la información del usuario conextado en el momento, si no hay usuario, será null.
  let login = to.matched.some(result => result.meta.requiresAuth); //buscamos cual ruta tiene activo un meta

  if (!usuario && login) {
    next({name: 'Login'}); // si la ruta tiene activo el meta y no hay usuario conectado en el sistema, no se deje ingresar a la ruta y se envia a login.
  } else if(usuario && !login) {
    next();
  } else {
    next();
  }
});

export default router
