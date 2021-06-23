import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Movie } from "../interfaces/movie-interfaces";
import { MoviePoster } from "./MoviePoster";

interface IProps {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: IProps) => {
    return (
        <View style={{ paddingVertical: 20 }}>
            {title && <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 10 }}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => <MoviePoster movie={item} width={140} height={200} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
