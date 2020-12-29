import Vue from 'vue';
import Vuex from 'vuex';
import { conexApi } from '../services/apiConfig'; // variable con la función de conexión a api mediante axios en archivo externo
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    respuestaApi: {},
    cursos: [],
    pacientes: []
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
    },
    enviandoPacientes(state){
      return state.pacientes
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
    },
    mutandoPacientesDd(state,datos){
      state.pacientes = datos;
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
      }, error => console.error(error));
    },
    traerDatosPacientes(context){
      firebase.firestore().collection('medicos').doc(context.state.user.uid).collection('pacientes').onSnapshot((res)=>{
        let datos = [];
        res.forEach(element => {
          datos.push({
            idDoc:  element.id,
            nombre: element.data().nombre,
            edad: element.data().edad,
            prevision: element.data().prevision,
            diagnostico: element.data().diagnostico,
          })
        })
        context.commit('mutandoPacientesDd', datos);
      }, error => console.error(error))
    },
    agregandoCurso(context, datos){
      // se usa el add para agregar un nuevo documento a la base de datos, se debe usar despues de una collection
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
      // se usa el delete para borrar un documento, se debe utilizar despues de un doc indicando el id o identificacion del documento a borrar
      firebase.firestore().collection('cursos').doc(id)
        .delete()
        .then(()=>console.log('eliminado'))
        .catch(error => console.error(error));
    },
    actualizandoCurso(context, datos){
      // el update se utiliza para actualizar un documento en especifico, se debe indicar cual es el id del documento. Se puede pasar uno o todos los valores a actualizar, no borrar los valores que no se actualicen.
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
    },
    registrarMedico(context,data){
      let datosMedico = {
        uid : data.uid,
        displayName : data.displayName,
        email: data.email,
        emailVerified : data.emailVerified,
        photoURL: data.photoURL,
        creationTime: data.metadata.creationTime
      };
      firebase.firestore().collection('medicos').doc(datosMedico.uid).set(datosMedico).then(() => console.log("Medico Agregado...")).catch(error => console.error(error));
    },
    agregandoPaciente(context,dataPaciente){
      firebase.firestore().collection('medicos').doc(context.state.user.uid).collection('pacientes').add({...dataPaciente}).then(()=> console.log("paciente agregado")).catch(error => console.error(error));
    },
    borrandoPaciente(context,id){
      firebase.firestore().collection('medicos').doc(context.state.user.uid).collection('pacientes').doc(id).delete().then(()=>console.log("paciente borrado")).catch(error => console.error(error));
    }
  },
})