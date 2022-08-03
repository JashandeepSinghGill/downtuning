import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const EditProfile = () => {
  const handleFocus = () => {
    setFocus(true);
  };

  const [isFocused, setFocus] = React.useState(false);

  return (
    <React.Fragment>
      <LinearGradient
        // Button Linear Gradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.headDiv}
      >
        <Text style={styles.text}>Ben Strokes</Text>
      </LinearGradient>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.wrapper}>
            <Text style={isFocused ? styles.highlightText : styles.textSmall}>
              First Name
            </Text>
            <TextInput name="fname" style={styles.input} placeholder="Ben" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper}>
            <Text style={isFocused ? styles.highlightText : styles.textSmall}>
              Last Name
            </Text>
            <TextInput
              name="lname"
              style={styles.input}
              placeholder="Strokes"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper}>
            <Text style={isFocused ? styles.highlightText : styles.textSmall}>
              Email
            </Text>
            <TextInput
              name="email"
              style={styles.input}
              placeholder="benstrokes@yahoo.com"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper}>
            <Text style={isFocused ? styles.highlightText : styles.textSmall}>
              Mobile
            </Text>
            <TextInput
              name="phone"
              style={styles.input}
              placeholder="+1(403)-456-2364"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textSmall}>update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 50,
    marginTop: 30,
  },
  headDiv: {
    padding: 50,
    width: "100%",
    backgroundColor: "blue",
    height: "20%",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    padding: 10,
  },

  highlightInput: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    padding: 10,
  },

  textSmall: {
    fontSize: 30,
    paddingLeft: 20,
    fontSize: 20,
    color: "#b2bfc9",
  },
  wrapper: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 19,
    marginTop: 10,
    borderRadius: 10,
    width: "87%",
  },
  highlightText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "red",
    padding: 10,
    backgroundColor: "red",
  },
});
