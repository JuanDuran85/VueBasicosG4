import Vue from 'vue';
import Vuex from 'vuex';
import { conexApi } from '../services/apiConfig';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    respuestaApi: {},
  },
  getters: {
    enviandoUser(state){
      return state.user;
    },
    enviandoAPI(state){
      return state.respuestaApi;
    }
  },
  mutations: {
    mutarUser(state,datoUser){
      state.user = datoUser; 
    },
    mutandoAPI(state,datos){
      state.respuestaApi = datos;
    }
  },
  actions: {
    user({commit},datoUser){
      commit('mutarUser',datoUser);
    },
    async llamarAPI({commit}){
      let resultado = await conexApi();
      commit('mutandoAPI', resultado);
      /* axios.get('https://yesno.wtf/api').then(respuesta => {
        console.log(respuesta.data);
        commit('mutandoAPI',respuesta.data);
      }).catch(error => console.error(error)); */
    }
  },
})
