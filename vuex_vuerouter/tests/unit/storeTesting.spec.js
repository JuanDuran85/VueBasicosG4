import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store/store';

describe('Prueba a la Store-VUEX',()=>{
    beforeAll(()=>{
        Vue.use(Vuex);
        store = new Vuex.Store(store);
    });
});

describe('Prueba store 1',()=>{
    it('prueba a actions de store',()=>{
        console.log("prueba 1");
        let juego = { id: 'XBDLI0600888132140W42350', codigo: "0003", nombre: "Sekiro V3", stock: "0", precio: "35000", color: "#ff3567", destacado: false, cantidad: 0 }
        store.dispatch('guardarJuego',juego);
        expect(store.state.listaJuegos).toHaveLength(6);
        expect(store.getters.eviarJuegoConStock).toHaveLength(5);
        
        store.dispatch('actualizarDestacado',10);
        expect(store.getters.eviarJuegoConStock).toHaveLength(5);
    });
});