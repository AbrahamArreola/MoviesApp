import React from "react";
import { Text, View } from "react-native";
import { IMovieDetails } from "../interfaces/movie-interfaces";
import { Cast } from "../interfaces/credits-interface";
import Icon from "react-native-vector-icons/Ionicons";
import { ActorCard } from "./ActorCard";
import { FlatList } from "react-native-gesture-handler";

interface IProps {
    movieDetails: IMovieDetails;
    cast: Cast[];
}

export const MovieDetails = ({ movieDetails, cast }: IProps) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: "row" }}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text> {movieDetails.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieDetails.genres.map(genre => genre.name).join(", ")}
                    </Text>
                </View>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>Overview</Text>
                <Text style={{ fontSize: 16 }}>{movieDetails.overview}</Text>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>Budget</Text>
                <Text style={{ fontSize: 18 }}>{`$${movieDetails.budget}`}</Text>
            </View>

            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text
                    style={{
                        fontSize: 23,
                        marginTop: 10,
                        fontWeight: "bold",
                        marginHorizontal: 20,
                    }}
                >
                    Cast
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <ActorCard actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />
            </View>
        </>
    );
};
