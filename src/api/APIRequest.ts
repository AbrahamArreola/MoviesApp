import axios from "axios";
import { MOVIE_DB_KEY } from "@env";

export const MovieRequest = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: MOVIE_DB_KEY,
        language: "en-EN",
    },
});
