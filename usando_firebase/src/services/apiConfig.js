import axios from 'axios'; // se importa axios, la cual es la libreria que usaremos para conectarnos a las api mediante conexión HTTP

let url_base = "https://yesno.wtf/api"; // aplicamos una variable con la url base

export const conexApi = async () => { // la función será asincrona para ahorrar lineas de código
    try { // se utiliza el bloque try-catch para implementar async - await
        let respuesta = await axios.get(url_base); // con axios.get se hace la peticion get a la url (api)
        return respuesta.data; // se retorna con la respuesta, axios siempre retorna el paquete dentro de una "data".
    } catch (error) {
        console.log(error);
    }
};