import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Cast } from "../interfaces/credits-interface";

interface IProps {
    actor: Cast;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        marginLeft: 20,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
});

export const ActorCard = ({ actor }: IProps) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {actor.profile_path && (
                <Image source={{ uri }} style={{ width: 50, height: 50, borderRadius: 10 }} />
            )}

            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{actor.name}</Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
            </View>
        </View>
    );
};
