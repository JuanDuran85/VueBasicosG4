import axios from 'axios';

let urlBase = "https://api.rawg.io/api"

// games?page=2

export const getApi = async (params) => {
    let result = await axios.get(`${urlBase}/games?page=${params}`);
    return result.data;
}