import Vue from 'vue';
import Vuex from 'vuex';
import {apiGet} from '@/services/apiConfig';
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculas: [],
    user: null
  },
  getters: {
    enviarPeliculas(state){
      return state.peliculas;
    },
    enviandoUser(state){
      return state.user;
    }
  },
  mutations: {
    mutandoPeliculas(state,datosPeliculas){
      state.peliculas = datosPeliculas;
    },
    mutandoUser(state,usuario){
      state.user = usuario;
    }
  },
  actions: {
    async traerPeliculas({commit}){
      let datosPeliculas = await apiGet('movie','popular');
      commit('mutandoPeliculas',datosPeliculas);
    },
    dataUser({commit},usuario){
      commit('mutandoUser', usuario);
    },
    registrarUsuario(context,data){
      console.log(data);
      let datosUsuario = {
        uid : data.uid,
        displayName : data.displayName,
        email: data.email,
        emailVerified : data.emailVerified,
        photoURL: data.photoURL,
        creationTime: data.metadata.creationTime
      };
      firebase.firestore().collection('usuariosInfo').doc(datosUsuario.uid).set(datosUsuario).then(() => console.info("usuario registrado")).catch(error => console.error(error));
    }
  },
})
