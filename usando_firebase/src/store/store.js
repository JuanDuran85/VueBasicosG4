import Vue from 'vue';
import Vuex from 'vuex';
import { conexApi } from '../services/apiConfig'; // variable con la función de conexión a api mediante axios en archivo externo
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    respuestaApi: {},
    cursos: []
  },
  getters: {
    enviandoUser(state){
      return state.user;
    },
    enviandoAPI(state){
      return state.respuestaApi;
    },
    enviandoCursos(state){
      return state.cursos;
    }
  },
  mutations: {
    mutarUser(state,datoUser){
      state.user = datoUser; 
    },
    mutandoAPI(state,datos){
      state.respuestaApi = datos;
    },
    mutandoCursosDd(state,datos){
      state.cursos = datos;
    }
  },
  actions: {
    user({commit},datoUser){
      commit('mutarUser',datoUser);
    },
    async llamarAPI({commit}){
      // con esta accion se llama a la funcion que conecta con la api, la cual se encuentra en un archivo externo
      let resultado = await conexApi();
      commit('mutandoAPI', resultado);
      /* axios.get('https://yesno.wtf/api').then(respuesta => {
        console.log(respuesta.data);
        commit('mutandoAPI',respuesta.data);
      }).catch(error => console.error(error)); */
    },
    traerDatosCursos({commit}){
      /* usar get cuando no se necesite leer datos en tiempo real, usar onSnapshot cuando se necesite leer siempre los datos para actualizar en tiempo real */
      firebase.firestore().collection('cursos').onSnapshot((res)=>{
        let datos = [];
        res.forEach(element => {
          datos.push({
            idDoc:  element.id,
            nombre: element.data().nombre,
            duracion: element.data().duracion,
            urlImagen: element.data().urlImagen,
            completado: element.data().completado,
            escuela: element.data().escuela,
            favorito: element.data().favorito
          })
        })
        commit('mutandoCursosDd', datos);
     /*  firebase.firestore().collection('cursos').get().then(res =>{
        let datos = [];
        res.forEach(element => {
          console.log(element.data(), element.id);
          datos.push({
            idDoc:  element.id,
            nombre: element.data().nombre,
            duracion: element.data().duracion,
            urlImagen: element.data().urlImagen,
            completado: element.data().completado,
            escuela: element.data().escuela,
            favorito: element.data().favorito
          })
        });
        commit('mutandoCursosDd', datos);
      }).catch(error => console.error(error)); */
      }, error => console.error(error))
    },
    agregandoCurso(context, datos){
      firebase.firestore().collection('cursos').add({
        nombre: datos.nombre,
        escuela: datos.escuela,
        completado: false,
        favorito: false,
        duracion: datos.duracion,
        urlImagen: datos.urlImagen
      }).then(() => console.log("Agregado...")).catch(error => console.error(error));
    },
    borrandoCurso(context,id){
      firebase.firestore().collection('cursos').doc(id)
        .delete()
        .then(()=>console.log('eliminado'))
        .catch(error => console.error(error));
    },
    actualizandoCurso(context, datos){
      firebase.firestore().collection('cursos').doc(datos.idDoc).update({
        nombre: datos.nombre,
        escuela: datos.escuela,
        completado: datos.completado,
        favorito: datos.favorito,
        duracion: datos.duracion,
        urlImagen: datos.urlImagen
      })
        .then(()=> console.log("Se actualizo"))
        .catch(error => console.error(error));
    }
  },
})