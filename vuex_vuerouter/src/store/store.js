import Vue from 'vue';
import Vuex from 'vuex';
/* l */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaJuegos: [
      { codigo: "0001", nombre: "Sekiro", stock: "10", precio: "30000", color: "red", destacado: "true" },
      { codigo: "0002", nombre: "Fifa 21", stock: "10", precio: "25000", color: "blue", destacado: "false" },
      { codigo: "0003", nombre: "Gear of War 4", stock: "10", precio: "15000", color: "green", destacado: "true" },
      { codigo: "0004", nombre: "Mario Tennis Aces", stock: "10", precio: "35000", color: "yellow", destacado: "false" },
      { codigo: "0005", nombre: "Bloodborne", stock: "10", precio: "10000", color: "blue", destacado: "false" },
      { codigo: "0006", nombre: "Forza Horizon 4", stock: "10", precio: "20000", color: "red", destacado: "true" },
    ],
    subtitulo: 'Juegos de PC',
    titulo: '32 bits',
    busqueda: null
  },
  getters: {
    enivandoTitulo(state){
      return state.titulo;
    },
    enivandoSubTitulo(state){
      return state.subtitulo;
    },
    enviarListaJuegos(state){
      return state.listaJuegos.filter(result =>{
        if (state.busqueda) {
          return result.codigo == state.busqueda
        } else {
          return result;
        }
      });
    },
    enviarJuegosTotales(state,getters){
      return getters.enviarListaJuegos.length;
    },
    enviarCantidadStock(state,getters){
      return getters.enviarListaJuegos.map(result => parseInt(result.stock))
    },
    enviarTotalStock(state,getters){
      return getters.enviarCantidadStock.reduce((acumulado,total)=>{
        return acumulado+total;
      },0);
    },

  },
  mutations: {
    mutandoBusqueda(state,valor){
      state.busqueda = valor;
    },
    mutandoListaJuegos(state,index){
      state.listaJuegos.splice(index,1);
    }
  },
  actions: {
    valorBusqueda({commit},valor){
      commit('mutandoBusqueda',valor);
    },
    borrandoItem({commit},index){
      commit('mutandoListaJuegos',index);
    }
  },
})
