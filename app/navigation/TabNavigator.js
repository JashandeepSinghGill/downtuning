import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import TabBar from "../components/TabBar";
import Explore from "../components/Explore";
import Map from "../components/Map";
import Pass from "../components/Pass";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Explore"
        component={Explore}
        initialParams={{ icon: "globe-americas" }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ icon: "home" }}
      />
      <Tab.Screen
        name="Tickets"
        component={Pass}
        initialParams={{ icon: "ticket-confirmation" }}
      />
      <Tab.Screen
        name="Maps"
        component={Map}
        initialParams={{ icon: "google-maps" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        initialParams={{ icon: "user" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
