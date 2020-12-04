import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaJuegos: [
      { codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true" },
      { codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true" },
      { codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true" },
      { codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true" },
      { codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true" },
      { codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true" },
    ]
  },
  getters: {
    
  },
  mutations: {
  },
  actions: {
  },
})
