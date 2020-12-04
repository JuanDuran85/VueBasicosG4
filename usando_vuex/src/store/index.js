import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 0
  },
  getters: {
  
  },
  mutations: {
    mutandoContador(state){
      state.contador++;
    }
  },
  actions: {
    aumentando(context){
      context.commit('mutandoContador');
    }
  },
})
