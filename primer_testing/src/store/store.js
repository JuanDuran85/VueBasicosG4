import Vue from 'vue';
import Vuex from 'vuex';
import router from './router/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    actividades: [
      {id: 1, task: 'Actividad numero 1', realizada: true}
    ],
    datosApi: [],
    favorito: []
  },
  getters: {
    enviarActividades(state){
      return state.actividades;
    },
    enviandoNumeroTarea(state){
      return state.actividades.length;
    },
    enviarRealizados(state,getters){
      return getters.enviarActividades.filter(result => result.realizada);
    },
    enviarDatosApi(state){
      return state.datosApi;
    },
    enviarFavoritos(state){
      return state.favorito;
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
    },
    mutandoDatosApi(state,datos){
      for (let index = 0; index < datos.length; index++) {
          datos[index].favorito = false;
      }
      state.datosApi = datos;
    },
    mutandoFavoritos(state,valor){
      let resultado = state.datosApi.find(result => result.id == valor.id);
      resultado.favorito = true;
      state.favorito.push(resultado)
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
    },
    async llamadoAPI({commit}){
      try {
        let result = await fetch('https://reqres.in/api/users?per_page=12')
        let datos = await result.json();
        commit('mutandoDatosApi',datos.data);
      } catch (error) {
        console.error(error);
      }
    },
    agregandoFavoritos({commit},valor){
      commit('mutandoFavoritos',valor);
      router.push({name: 'Favoritos'})
    }
  }
})
