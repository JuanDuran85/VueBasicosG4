import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoApiTotal: [],
    juegoFavorito: [],
    comentarios: [],
  },
  getters: {
    enviarinfoApi(state){
      return state.infoApiTotal;
    },
    enviandoFavoritos(state){
      return state.juegoFavorito;
    },
    enviandoComentarios(state){
      return state.comentarios;
    }
  },
  mutations: {
    mutandoInfoAPI(state,datos){
      state.infoApiTotal = datos;
    },
    mutandoAgregarFav(state,juegoFav){
      let juegoEnFav = state.juegoFavorito.find(result => result.id === juegoFav.id);
      if (juegoEnFav === undefined) {
        state.juegoFavorito.push(juegoFav);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El juego ya se encuentra en favoritos',
          footer: 'Intenta con otro juego'
        })
      }
    },
    mutandoEliminarFav(state,index){
      state.juegoFavorito.splice(index,1);
    },
    mutandoComentarioNuevo(state,comentario){
      state.comentarios.push(comentario);
    },
    mutandoComentarioBorrar(state,index){
      state.comentarios.splice(index,1);
    },
    mutandoComentarioEditar(state,comentarioEditado){
      let comentarioSolo = state.comentarios.find(result => result.idJuego === comentarioEditado.idJuego);
      if (comentarioEditado !== undefined) {
        comentarioSolo.nombre = comentarioEditado.nombre;
        comentarioSolo.comentario = comentarioEditado.comentario;
        comentarioSolo.nombreJuego = comentarioEditado.nombreJuego;
        comentarioSolo.idJuego = comentarioEditado.idJuego;
      } else {
        console.log("No existe");
      }
    }
  },
  actions: {
    infoApi({commit}){
      fetch('https://api.rawg.io/api/games')
        .then(res => res.json())
        .then(result => {
          console.log(result.results);
          commit('mutandoInfoAPI',result.results);
        })
        .catch(err => console.log(err));
    },
    agregandoJuegoFav({commit},juegoFav){
      commit('mutandoAgregarFav',juegoFav);
    },
    borrarFav({commit},index){
      commit('mutandoEliminarFav',index);
    },
    agregandoNuevoComentario({commit},comentario){
      commit('mutandoComentarioNuevo',comentario);
    },
    deleteComent({commit},index){
      commit('mutandoComentarioBorrar',index);
    },
    guardandoEdicion({commit},comentarioEditado){
      commit('mutandoComentarioEditar',comentarioEditado);
    }
  },
})
