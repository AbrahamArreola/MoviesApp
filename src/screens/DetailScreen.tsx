import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RootStackParams } from "../navigation/Navigation";

interface IProps extends StackScreenProps<RootStackParams, "DetailScreen"> {}

const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: screenHeight * 0.7,
        shadowColor: "#000",
        overflow: "hidden",
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
});

export const DetailScreen = ({ route }: IProps) => {
    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.posterImage} />
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.title}</Text>
                <Text style={styles.title}>{movie.original_title}</Text>
            </View>
        </ScrollView>
    );
};
