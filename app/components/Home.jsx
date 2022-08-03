import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AnimatedScrollView from "./AnimatedScrollView";

const Home = () => {
  return (
    <AnimatedScrollView style={styles.container}>
      <Text style={styles.text}>Feed</Text>
    </AnimatedScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#76a6ef",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Home;
