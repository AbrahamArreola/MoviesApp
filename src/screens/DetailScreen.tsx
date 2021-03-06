import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParams } from "../navigation/Navigation";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieDetails } from "../components/MovieDetails";
import Icon from "react-native-vector-icons/Ionicons";

interface IProps extends StackScreenProps<RootStackParams, "DetailScreen"> {}

const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: screenHeight * 0.7,
        shadowColor: "#000",
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: "hidden",
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 18,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    backButton: {
        position: "absolute",
        zIndex: 999,
        elevation: 12,
        top: 20,
        left: 5,
    },
});

export const DetailScreen = ({ route, navigation }: IProps) => {
    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const { isLoading, movieDetails, cast } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image source={{ uri }} style={styles.posterImage} />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.title}</Text>
                <Text style={styles.title}>{movie.original_title}</Text>
            </View>

            {isLoading ? (
                <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
            ) : (
                <MovieDetails movieDetails={movieDetails!} cast={cast} />
            )}

            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Icon color="#FFF" name="arrow-back-outline" size={60} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
