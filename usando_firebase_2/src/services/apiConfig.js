import axios from 'axios';

let url_base = "https://api.themoviedb.org/3";

export const apiGet = async (param1,param2) => {
    let result = await axios.get(`${url_base}/${param1}/${param2}?api_key=989dd5389d523dc4bfea1fe171937069`);
    return result.data;
}