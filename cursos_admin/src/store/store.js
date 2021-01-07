import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    user: null
  },
  getters: {
    enviandoCursos(state){
      return state.cursos;
    },
    enviandoUser(state){
      return state.user;
    }
  },
  mutations: {
    mutandoCursos(state,cursosLocal){
      state.cursos = cursosLocal;
    },
    mutandoUserLocal(state,userData){
      state.user = userData;
    }
  },
  actions: {
    traerCursosDb({commit}){
      firebase.firestore().collection('cursos').onSnapshot(result =>{
        let cursosLocal = [];
        result.forEach(element => {
          cursosLocal.push({
            cupos: element.data().cupos,
            duracion: element.data().duracion,
            fecharegistro: element.data().fecharegistro,
            imagen: element.data().imagen,
            nombre: element.data().nombre,
            precio: element.data().precio,
            terminado: element.data().terminado,
            idCurso: element.data().id,
            idDoc: element.id,
          })
        });
        commit('mutandoCursos',cursosLocal);
      })
    },
    cargandoUsuario({commit},userData){
      commit('mutandoUserLocal',userData);
    }
  },
  modules: {
  }
})
