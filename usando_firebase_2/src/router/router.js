import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store/store';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    alias: ['/inicio','/peliculas'],
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Registro.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    props: true,
    component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "Administracion" */ '../views/Administracion.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import(/* webpackChunkName: "Favoritos" */ '../views/Favoritos.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let loginUser = store.getters.enviandoUser;
  let requiresAuth = to.matched.some(res => res.meta.requiresAuth);

  if (!loginUser && requiresAuth) {
    next('login');
  } else if (loginUser && !requiresAuth){
    next()
  } else {
    next()
  }
});


export default router
