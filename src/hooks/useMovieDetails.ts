import { useEffect, useState } from "react";
import { MovieRequest } from "../api/APIRequest";
import { IMovieDetails } from "../interfaces/movie-interfaces";
import { CreditsInfo, Cast } from "../interfaces/credits-interface";

interface IMovieDetailsState {
    isLoading: boolean;
    movieDetails?: IMovieDetails;
    cast: Cast[];
}

const MovieDetailsInitState: IMovieDetailsState = {
    isLoading: true,
    movieDetails: undefined,
    cast: [],
};

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<IMovieDetailsState>(MovieDetailsInitState);

    const getMovieDetails = async () => {
        try {
            const movieDetailsPromise = MovieRequest.get<IMovieDetails>(`${movieId}`);
            const creditsInfoPromise = MovieRequest.get<CreditsInfo>(`${movieId}/credits`);

            const [movieDetailsResp, castResp] = await Promise.all([movieDetailsPromise, creditsInfoPromise]);

            setState({
                isLoading: false,
                movieDetails: movieDetailsResp.data,
                cast: castResp.data.cast,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state,
    };
};
