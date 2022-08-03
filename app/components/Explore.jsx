import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  AppRegistry,
  Image,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { places } from "../places";

export default function Explore() {
  return (
    <React.Fragment>
      <LinearGradient
        // Button Linear Gradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.headDiv}
      >
        <Text style={styles.text}>Explore</Text>
      </LinearGradient>

      <SafeAreaView style={styles.container}>
        <Text style={styles.subText}>Your List</Text>
        <View style={styles.hView}>
          <ScrollView style={styles.scrollContainer} horizontal={true}>
            <TouchableOpacity style={styles.wrapper}>
              <Image
                source={{
                  uri: places[0].url,
                }}
                style={{
                  width: 204,
                  height: 126,
                  borderRadius: 30,
                  resizeMode: "contain",
                }}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wrapper}>
              <Image
                source={{
                  uri: places[1].url,
                }}
                style={{
                  width: 204,
                  height: 126,
                  borderRadius: 30,
                  resizeMode: "contain",
                }}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wrapper}>
              <Image
                source={{
                  uri: places[2].url,
                }}
                style={{
                  width: 234,
                  height: 126,
                  borderRadius: 30,
                  resizeMode: "contain",
                }}
              ></Image>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <Text style={styles.subText}>Places you might like!</Text>
        <TextInput
          name="lname"
          style={styles.input}
          placeholder="Know a place search here!"
        />

        <Text style={styles.subText}>Trending Places!</Text>
        <View style={styles.hView}>
          <ScrollView style={styles.scrollContainer} horizontal={true}>
            <TouchableOpacity style={styles.wrapper}>
              <Image
                source={{
                  uri: places[2].url,
                }}
                style={{
                  width: 204,
                  height: 126,
                  borderRadius: 30,
                  resizeMode: "contain",
                }}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wrapper}>
              <Image
                source={{
                  uri: places[1].url,
                }}
                style={{
                  width: 204,
                  height: 126,
                  borderRadius: 30,
                  resizeMode: "contain",
                }}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wrapper}>
              <Image
                source={{
                  uri: places[0].url,
                }}
                style={{
                  width: 234,
                  height: 126,
                  borderRadius: 30,
                  resizeMode: "contain",
                }}
              ></Image>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "red",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headDiv: {
    padding: 50,
    width: "100%",
    backgroundColor: "blue",
    height: "20%",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 17,
    borderColor: "grey",
    width: "80%",
    padding: 10,
  },
  text: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#ffffff",
    shadowColor: "#090909",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  subText: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#ffffff",
    marginTop: 10,
    borderRadius: 10,
    width: "40%",
    // backgroundColor: "#0093E9",
    color: "white",
    fontSize: 30,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  hView: {
    flex: 1,
  },
});

// —Gradient
// Ed213a
