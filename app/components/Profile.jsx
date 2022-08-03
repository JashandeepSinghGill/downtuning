import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
// import profilePic from "./assets/profile-user.png";
const Profile = ({ navigation }) => {
  return (
    <React.Fragment>
      <LinearGradient
        // Button Linear Gradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.headDiv}
      >
        <Text style={styles.text}>Ben Strokes</Text>
      </LinearGradient>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => navigation.navigate("Test")}
          title="EditProfile"
        >
          {/* <Image source={{ uri: "asset:/profile-user.png" }} style={styles.img} /> */}
          <AntDesign name={"user"} size={"25"} color={"black"} />
          <Text style={styles.textSmall}>Edit Profile </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => navigation.navigate("Test")}
          title="EditProfile"
        >
          {/* <Image source={{ uri: "asset:/profile-user.png" }} style={styles.img} /> */}
          <Entypo name="credit-card" size={24} color="blue" />
          <Text style={styles.textSmall}>Saved Cards</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => navigation.navigate("Test")}
          title="EditProfile"
        >
          {/* <Image source={{ uri: "asset:/profile-user.png" }} style={styles.img} /> */}
          <Ionicons name="notifications" size={24} color="rgb(255,55,55)" />
          <Text style={styles.textSmall}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => navigation.navigate("Test")}
          title="EditProfile"
        >
          {/* <Image source={{ uri: "asset:/profile-user.png" }} style={styles.img} /> */}
          <AntDesign name="customerservice" size={24} color="black" />
          <Text style={styles.textSmall}>Customer Support</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => navigation.navigate("Test")}
          title="EditProfile"
        >
          {/* <Image source={{ uri: "asset:/profile-user.png" }} style={styles.img} /> */}
          <MaterialCommunityIcons name="logout" size={24} color="black" />
          <Text style={styles.textSmall}>Logout</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 50,
    marginTop: 30,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
  },
  headDiv: {
    padding: 50,
    width: "100%",
    backgroundColor: "blue",
    height: "20%",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 22,
    marginTop: 20,
    borderRadius: 10,
    width: "87%",
  },
  textSmall: {
    paddingLeft: 20,
    fontSize: 20,
  },
  img: {
    width: 20,
    height: 25,
  },
});

export default Profile;
