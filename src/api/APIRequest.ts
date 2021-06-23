import axios from "axios";

export const MovieRequest = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "57398e72ef3ac9a789124d0dfe2aa8d8",
        language: "es-ES",
    },
});
