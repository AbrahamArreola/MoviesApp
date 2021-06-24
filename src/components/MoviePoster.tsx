import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Movie } from "../interfaces/movie-interfaces";

interface IProps {
    movie: Movie;
    width?: number;
    height?: number;
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
    },
    image: {
        flex: 1,
        borderRadius: 15,
    },
});

export const MoviePoster = ({ movie, width = 300, height = 420 }: IProps) => {
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ width, height, marginHorizontal: 2, paddingBottom: 20, paddingHorizontal: 7 }}
            onPress={() => navigation.navigate("DetailScreen", movie)}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image}></Image>
            </View>
        </TouchableOpacity>
    );
};
