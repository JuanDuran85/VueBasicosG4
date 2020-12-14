import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activo: false,
    contador: 0,
  },
  getters: {
    enviarActivo(state){
      return state.activo;
    },
    enviarContador(state){
      return state.contador;
    },
    enviarContadorMayorCinco(state){
      return state.contador > 5;
    }
  },
  mutations: {
    mutandoActivoState(state){
      state.activo = !state.activo
    },
    mutandoContadorState(state){
      state.contador += 1;
    },
    mutandoContadorMenos(state){
      state.contador -= 1;
    }
  },
  actions: {
    updateActivo(context){
      context.commit('mutandoActivoState');
    },
    aumentandoContador({commit}){
      commit('mutandoContadorState');
    },
    desminuirContador({commit}){
      commit('mutandoContadorMenos')
    }
  },
})
