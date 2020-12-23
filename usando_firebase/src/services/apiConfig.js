import axios from 'axios';

let url_base = "https://yesno.wtf/api";

export const conexApi = async () => {
    try {
        let respuesta = await axios.get(url_base);
        return respuesta.data;
    } catch (error) {
        console.log(error);
    }
};