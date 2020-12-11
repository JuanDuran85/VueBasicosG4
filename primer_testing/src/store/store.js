import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    actividades: [
      {id: 1, task: 'Actividad numero 1', realizada: true}
    ]
  },
  getters: {
    enviarActividades(state){
      return state.actividades;
    }
  },
  mutations: {
    mutandoActividades(state,tarea){
      let objeTarea = {
        id: state.actividades.length+1,
        task: tarea,
        realizada: false
      }
      state.actividades.push(objeTarea);
    },
    deleteTask(state,index){
      state.actividades.splice(index,1);
    },
    mutandoEstado(state,index){
      state.actividades[index].realizada = !state.actividades[index].realizada;
    }
  },
  actions: {
    agregarTarea({commit},tarea){
      commit('mutandoActividades',tarea);
    },
    eliminandoTarea({commit},index){
      commit('deleteTask',index);
    },
    modificarEstado({commit},index){
      commit('mutandoEstado',index)
    }
  }
})
