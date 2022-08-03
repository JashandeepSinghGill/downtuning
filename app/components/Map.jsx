import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
export default function Map() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 51.044189352127226,
              longitude: -114.05493533754235,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <TextInput
              name="fname"
              style={styles.input}
              placeholder="What are you looking for?"
            />
            <FontAwesome
              name="search"
              size={26}
              color="black"
              style={styles.iconContainer}
            />
          </MapView>
          <Marker
            coordinate={{
              latitude: 51.044189352127226,
              longitude: -114.05493533754235,
            }}
            title="this is a marker"
            description="this is a marker example"
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 100,
    borderColor: "black",
    justifyContent: "flex-start",
    opacity: 1,
  },
  wrapper: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 100,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 17,
    borderColor: "grey",
    width: "80%",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    left: 40,
  },
  iconContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 14,
    right: 60,
  },
});
