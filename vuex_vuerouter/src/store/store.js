import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaJuegos: [
      { id: 'XBDLI0600888132140W42350', codigo: "0001", nombre: "Sekiro", stock: "10", precio: "30000", color: "red", destacado: "true" },
      { id: 'AUDCY532700371069019103F8544995', codigo: "0002", nombre: "Fifa 21", stock: "10", precio: "25000", color: "blue", destacado: "false" },
      { id: 'MKDAT027004446560600862', codigo: "0003", nombre: "Gear of War 4", stock: "10", precio: "15000", color: "green", destacado: "true" },
      { id: 'KYDMT49HFVX050697094637713M3268472', codigo: "0004", nombre: "Mario Tennis Aces", stock: "10", precio: "35000", color: "yellow", destacado: "false" },
      { id: 'BMDVG35179N3201470087060442', codigo: "0005", nombre: "Bloodborne", stock: "10", precio: "10000", color: "blue", destacado: "false" },
      { id: 'TNDEE073489002008960817', codigo: "0006", nombre: "Forza Horizon 4", stock: "10", precio: "20000", color: "red", destacado: "true" },
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
    },
    mutandoLista(state,juego){
      let item = state.listaJuegos.find(result => result.id == juego.id)
      item.nombre = juego.nombre;
      item.precio = juego.precio;
      item.codigo = juego.codigo;
      item.color = juego.color;
      item.destacado = juego.destacado;
      item.stock = juego.stock;
    }
  },
  actions: {
    valorBusqueda({commit},valor){
      commit('mutandoBusqueda',valor);
    },
    borrandoItem({commit},index){
      commit('mutandoListaJuegos',index);
    },
    guardarJuego({commit},juego){
      commit('mutandoLista',juego)
    }
  },
})
