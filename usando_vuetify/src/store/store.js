import Vue from 'vue';
import Vuex from 'vuex';

import { getApi } from '@/services/conexApi';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: []
  },
  mutations: {
    mutandoGames(state,dataGames){
      state.games = dataGames;
    }
  },
  getters: {
    enviandoGamesResult(state){
      return state.games.results;
    },
/*     enviandoPlataformas(state, getters){
      getters.enviandoGamesResult.forEach((element) => {
        for (let i = 0; i < element.platforms.length; i++) {
          console.log(element.platforms[i].platform.name);
        }          
      })
    } */
  },
  actions: {
    async traerInfoApi({commit},pagina){
      let dataGames = await getApi(pagina);
      commit('mutandoGames',dataGames)
    }
  },
  modules: {
  }
})
