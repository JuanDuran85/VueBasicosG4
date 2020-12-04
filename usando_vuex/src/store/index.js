import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 0,
    pais: []
  },
  getters: {
    enviandoContador(state){
      return state.contador;
    },
    enviarInfoPais(state){
      return state.pais;
    },
/*     eviarContadorMayorCinco(state){
      if (state.contador > 5) {
          return state.contador
      }else {
        return "El valor es menor que 5"
      }
    } */
  },
  mutations: {
    mutandoContador(state){
      state.contador++;
    },
    mutandoContadorMenos(state){
      if (state.contador > 0) {
        state.contador--;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No puedes disminuir la cuenta bajo cero',
        });
      }
    },
    resultadoPais(state,dataPais){
      state.pais = dataPais;
    }
  },
  actions: {
    aumentando(context){
      context.commit('mutandoContador');
    },
    restando(context){
      context.commit('mutandoContadorMenos');
    },
    buscandoPais(context,nombre){
      fetch(`https://restcountries.eu/rest/v2/name/${nombre}`)
      .then(result => result.json())
      .then(resultado =>{
        if (resultado.status == 404) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El país que buscas no existe, intenta con otro',
          });
        } else {
          context.commit('resultadoPais',resultado);
        }
      }).catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El país que buscas no existe, intenta con otro',
        });
      });
    }
  },
})
