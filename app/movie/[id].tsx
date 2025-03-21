import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/usefetch";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  console.log(id);
  
  return (
    <View>
      <Text>MovieDetails</Text>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
