import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaJuegos: [
      { id: 'XBDLI0600888132140W42350', codigo: "0001", nombre: "Sekiro", stock: "10", precio: "30000", color: "#ff0000", destacado: true, cantidad: 0 },
      { id: 'AUDCY532700371069019103F8544995', codigo: "0002", nombre: "Fifa 21", stock: "10", precio: "25000", color: "#0000ff", destacado: false, cantidad: 0 },
      { id: 'MKDAT027004446560600862', codigo: "0003", nombre: "Gear of War 4", stock: "10", precio: "15000", color: "#00ff00", destacado: true, cantidad: 0 },
      { id: 'KYDMT49HFVX050697094637713M3268472', codigo: "0004", nombre: "Mario Tennis Aces", stock: "10", precio: "35000", color: "#ffff00", destacado: false, cantidad: 0 },
      { id: 'BMDVG35179N3201470087060442', codigo: "0005", nombre: "Bloodborne", stock: "10", precio: "10000", color: "#0000ff", destacado: false, cantidad: 0 },
      { id: 'TNDEE073489002008960817', codigo: "0006", nombre: "Forza Horizon 4", stock: "10", precio: "20000", color: "#ff0000", destacado: true, cantidad: 0 },
    ],
    subtitulo: 'Juegos de PC',
    titulo: '32 bits',
    busqueda: null,
    productosVendidos: 0,
    boleta: [],
    ventasTotales: [],
    idCompra: ''
  },
  getters: {
    enivandoTitulo(state){
      return state.titulo;
    },
    enivandoSubTitulo(state){
      return state.subtitulo;
    },
    eviarJuegoConStock(state){
      return state.listaJuegos.filter(result => result.stock > 0);
    },
    enviarProductosVendidos(state){
      return state.productosVendidos;
    },
    enviarListaJuegos(state){
      return state.listaJuegos.filter(result =>{
        if (state.busqueda) {
          return result.codigo == state.busqueda
        } else {
          return result;
        }
      });
    },
    enviarJuegosTotales(state,getters){
      return getters.enviarListaJuegos.length;
    },
    enviarCantidadStock(state,getters){
      return getters.enviarListaJuegos.map(result => parseInt(result.stock))
    },
    enviarTotalStock(state,getters){
      return getters.enviarCantidadStock.reduce((acumulado,total)=>{
        return acumulado+total;
      },0);
    },
    eviarBoleta(state){
      return state.boleta
    },
    eviarTotalBoleta(state,getters){
      let precios = getters.eviarBoleta.map(result => parseFloat(result.precio)*result.cantidad)
      return precios.reduce((acumulado,inicial)=>{
        return acumulado+inicial;
      },0);
    },
    eviarCantidadVendida(state,getters){
      let cantidad = getters.eviarBoleta.map(result => result.cantidad);
      return cantidad.reduce((acumulado,inicial) => {
        return acumulado+inicial;
      },0)
    }

  },
  mutations: {
    mutandoBusqueda(state,valor){
      state.busqueda = valor;
    },
    mutandoListaJuegos(state,index){
      state.listaJuegos.splice(index,1);
    },
    mutandoLista(state,juego){
      let item = state.listaJuegos.find(result => result.id == juego.id)
      item.nombre = juego.nombre;
      item.precio = juego.precio;
      item.codigo = juego.codigo;
      item.color = juego.color;
      item.destacado = juego.destacado;
      item.stock = juego.stock;
    },
    mutandoDestacado(state,index){
      state.listaJuegos[index].destacado = !state.listaJuegos[index].destacado;
    },
    mutandoJuegos(state,juego){
      let valor = [];
      for (let index = 0; index < 11; index++) {
        valor.push(Math.floor(Math.random() * 100));
      }
      let id = valor.join('');
      juego.id = id;
      state.listaJuegos.push(juego);
    },
    restarStock(state,item){
      let resultado = state.listaJuegos.find(result => result.id == item.id);
      resultado.stock--;
      ++resultado.cantidad;
      state.productosVendidos++;
      let resulBoleta = state.boleta.find(boleta => boleta.id == resultado.id)
      if (!resulBoleta) {
        state.boleta.push(resultado); 
      }else{
        resulBoleta.cantidad = resultado.cantidad;
      }
    },
    sumarStock(state,item){
      let resultado = state.listaJuegos.find(result => result.id == item.id);
      resultado.stock++;
      --resultado.cantidad;
      state.productosVendidos--;
      if (resultado.cantidad == 0) {
        let resulBoleta = state.boleta.findIndex(boleta => boleta.id == resultado.id);
        state.boleta.splice(resulBoleta,1); 
      }else{
        let resulBoleta = state.boleta.find(boleta => boleta.id == resultado.id);
        resulBoleta.cantidad = resultado.cantidad;
      }
    },
    borrarProducto(state,item){
      let resultado = state.listaJuegos.find(result => result.id == item.id);
      resultado.stock += resultado.cantidad;
      state.productosVendidos -= resultado.cantidad;
      resultado.cantidad = 0;
      let producto = state.boleta.findIndex(result => result.id == item.id);
      state.boleta.splice(producto,1);
    },
    total(state){
      state.ventasTotales.push(state.boleta);
      state.boleta = [];
      state.productosVendidos = 0;
    }
  },
  actions: {
    valorBusqueda({commit},valor){
      commit('mutandoBusqueda',valor);
    },
    borrandoItem({commit},index){
      commit('mutandoListaJuegos',index);
    },
    guardarJuego({commit},juego){
      commit('mutandoLista',juego)
    },
    actualizarDestacado({commit},index){
      commit('mutandoDestacado',index);
    },
    guardarProducto({commit},juego){
      commit('mutandoJuegos',juego)
    },
    venderProducto({commit},item){
      commit('restarStock',item);
    },
    restarProducto({commit},item){
      commit('sumarStock',item);
    },
    totalVentaProductos({commit, state, getters}){
      state.boleta.totalVenta = getters.eviarTotalBoleta;
      state.boleta.cantidadTotal = getters.eviarCantidadVendida;
      commit('total');
    },
    eliminando({commit},item){
      commit('borrarProducto',item);
    }
  },
})
