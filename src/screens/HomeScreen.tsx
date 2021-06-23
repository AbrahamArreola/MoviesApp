import React from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { HorizontalSlider } from "../components/HorizontalSlider";
import { MoviePoster } from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";

const { width: windowWidth } = Dimensions.get("window");

export const HomeScreen = () => {
    const {
        nowPlaying: nowPlayingMovies,
        popular: popularMovies,
        topRated: topRatedMovies,
        upcoming: upcomingMovies,
        isLoading,
    } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator color="blue" size={100} />
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlayingMovies}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>

                <HorizontalSlider title="Popular:" movies={popularMovies} />
                <HorizontalSlider title="Top Rated:" movies={topRatedMovies} />
                <HorizontalSlider title="Upcoming:" movies={upcomingMovies} />
            </View>
        </ScrollView>
    );
};
