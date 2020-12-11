import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store/store';

describe('Inciando con Vuex-Store',()=>{
    // se inicia el vuex y se crea la instancia del store de forma global antes de hacer las pruebas
    beforeAll(() => {
        Vue.use(Vuex);
        store = new Vuex.Store(store);
    })
});

describe('probando actions de store',()=>{
    it('Probando agregarTarea',()=>{

        // se ejecutan los dispatch
        store.dispatch('agregarTarea','Tarea numero 1');
        store.dispatch('agregarTarea','Tarea numero 2');
        store.dispatch('agregarTarea','Tarea numero 3');
        // se comprueba el stado
        expect(store.state.actividades.length).toBe(4);
        store.dispatch('eliminandoTarea',3);
        store.dispatch('eliminandoTarea',8);
        expect(store.state.actividades.length).toBe(3);
        store.dispatch('modificarEstado',0);
        store.dispatch('modificarEstado',1)
        store.dispatch('modificarEstado',2)
        expect(store.state.actividades[0].realizada).toBe(false);
        expect(store.state.actividades[1].realizada).toBe(true);
        expect(store.state.actividades[2].task).toEqual("Tarea numero 2");

        //trabajando con getters de la store
        let enviarActividades = store.getters.enviarActividades;
        expect(enviarActividades.length).toBe(3);
        for (let index = 0; index < enviarActividades.length; index++) {
            expect(enviarActividades[index].id).toBe(index+1);
        };

        let enviarRealizados = store.getters.enviarRealizados;
        expect(enviarRealizados).toHaveLength(2);

        let enviandoNumeroTarea = store.getters.enviandoNumeroTarea;
        console.log(enviandoNumeroTarea);
        expect(enviandoNumeroTarea).toBeGreaterThanOrEqual(3);
    })
});