import Vue from 'vue';
import Vuex from 'vuex';
import {apiGet} from '@/services/apiConfig';
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculas: [],
    user: null,
    peliculasFav: [],
    opiniones: []
  },
  getters: {
    enviarPeliculas(state){
      return state.peliculas;
    },
    enviandoUser(state){
      return state.user;
    },
    enviandoPeliculasFav(state){
      return state.peliculasFav;
    },
    enviandoOpiniones(state){
      return state.opiniones;
    }
  },
  mutations: {
    mutandoPeliculas(state,datosPeliculas){
      state.peliculas = datosPeliculas;
    },
    mutandoUser(state,usuario){
      state.user = usuario;
    },
    mutandoPeliculasFav(state,fav){
      state.peliculasFav = fav
    },
    eliminandoFavLocal(state,idDoc){
      let resultado = state.peliculasFav.findIndex(index => index.idDoc === idDoc);
      console.log(resultado);
      state.peliculasFav.splice(resultado,1);
    },
    borrandoFavLocal(state){
      state.peliculasFav = [];
    },
    mutandoOpiniones(state,opinionBD){
      state.opiniones = opinionBD;
    },
    borrandoOpinionLocal(state){
      state.opiniones = [];
    },
    borrandoOpiLocal(state,idDoc){
      let resultado = state.opiniones.findIndex(indice => indice.idDoc === idDoc);
      state.opiniones.splice(resultado,1);
    }
  },
  actions: {
    async traerPeliculas({commit}){
      let datosPeliculas = await apiGet('movie','popular');
      console.log(datosPeliculas);
      commit('mutandoPeliculas',datosPeliculas);
    },
    dataUser({commit},usuario){
      commit('mutandoUser', usuario);
    },
    registrarUsuario(context,data){
      console.log(data);
      let datosUsuario = {
        uid : data.uid,
        displayName : data.displayName,
        email: data.email,
        emailVerified : data.emailVerified,
        photoURL: data.photoURL,
        creationTime: data.metadata.creationTime
      };
      firebase.firestore().collection('usuariosInfo').doc(datosUsuario.uid).set(datosUsuario).then(() => console.info("usuario registrado")).catch(error => console.error(error));
    },
    agregandoFavDb(context, peliculaFav){
      let encontrado = context.state.peliculasFav.find(element => element.title === peliculaFav.title);
      if (encontrado === undefined) {
        return firebase.firestore().collection('usuariosInfo').doc(context.state.user.uid).collection('favoritos').add({...peliculaFav});
      } else {
        let error = new Error('Ya existe en favoritos la pelicula');
        return error;
      }
    },
    traerFavPelis(context){
      firebase.firestore().collection('usuariosInfo').doc(context.state.user.uid).collection('favoritos').onSnapshot((result) => {
        let peliculasFav = [];
        result.forEach(element =>{
          peliculasFav.push({
            idDoc: element.id,
            poster_path: element.data().poster_path,
            title: element.data().title
          });
          context.commit('mutandoPeliculasFav',peliculasFav);
        });
      }, error => {
        console.error(error)
      });
    },
    deletePeliFav(context,idDoc){
      return firebase.firestore().collection('usuariosInfo').doc(context.state.user.uid).collection('favoritos').doc(idDoc).delete();
    },
    eliminarFavLocal({commit},idDoc){
      commit('eliminandoFavLocal',idDoc);
    },
    borrarFavoritosLocal({commit}){
      commit('borrandoFavLocal');
    },
    creandoOpinion(context,opinion){
      firebase.firestore().collection('usuariosInfo').doc(context.state.user.uid).collection('opiniones').add({...opinion});
      context.dispatch('cargandoOpiniones');
    },
    cargandoOpiniones(context){
      firebase.firestore().collection('usuariosInfo').doc(context.state.user.uid).collection('opiniones').onSnapshot(result => {
        let opinionesAux = [];
        result.forEach(element => {
          opinionesAux.push({
            idDoc: element.id,
            nombre: element.data().nombre,
            opinion: element.data().opinion,
            fecha: element.data().fecha,
            titulo: element.data().titulo,
            idPeli: element.data().idPeli
          });
          console.log(opinionesAux);
          context.commit('mutandoOpiniones',opinionesAux);
        })
      })
    },
    borrarOpinionesLocal({commit}){
      commit('borrandoOpinionLocal')
    },
    eliminarOpinion(context,opinion){
      return firebase.firestore().collection('usuariosInfo').doc(context.state.user.uid).collection('opiniones').doc(opinion.idDoc).delete();
    },
    borrandoOpinionLocal({commit},item){
      commit('borrandoOpiLocal',item.idDoc);
    }
  },
})
