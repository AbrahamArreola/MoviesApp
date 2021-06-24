import react, { useEffect, useState } from "react";
import { MovieRequest } from "../api/APIRequest";
import { MovieDBMoviesResponse, Movie } from "../interfaces/movie-interfaces";

interface IMoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

const moviesInitState: IMoviesState = {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
};

export const useMovies = () => {
    const [moviesState, setMoviesState] = useState<IMoviesState>(moviesInitState);
    const [isLoading, setIsLoading] = useState(false);

    const getMovies = async () => {
        try {
            const nowPlayingPromise = MovieRequest.get<MovieDBMoviesResponse>("/now_playing");
            const popularPromise = MovieRequest.get<MovieDBMoviesResponse>("/popular");
            const topRatedPromise = MovieRequest.get<MovieDBMoviesResponse>("/top_rated");
            const upcomingPromise = MovieRequest.get<MovieDBMoviesResponse>("/upcoming");

            const resp = await Promise.all([
                nowPlayingPromise,
                popularPromise,
                topRatedPromise,
                upcomingPromise,
            ]);

            setMoviesState({
                nowPlaying: resp[0].data.results,
                popular: resp[1].data.results,
                topRated: resp[2].data.results,
                upcoming: resp[3].data.results,
            });
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading,
    };
};
