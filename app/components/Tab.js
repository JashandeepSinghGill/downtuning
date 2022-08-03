import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const siZe = 28;
const Tab = ({ color, tab, onPress, icon }) => {
  const handleIcon = () => {
    if (icon == "home") {
      return <MaterialIcons name="rss-feed" size={siZe} color={color} />;
    } else if (icon == "globe-americas") {
      return <FontAwesome5 name="globe-americas" size={siZe} color={color} />;
    } else if (icon == "ticket-confirmation") {
      return (
        <MaterialCommunityIcons
          name="ticket-confirmation"
          size={siZe}
          color={color}
        />
      );
    } else if (icon == "google-maps") {
      return (
        <MaterialCommunityIcons name="google-maps" size={siZe} color={color} />
      );
    } else {
      return <AntDesign name={"user"} size={siZe} color={color} />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {handleIcon()}
      <Text style={{ color }}></Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    paddingTop: 16,
  },
});

export default Tab;
