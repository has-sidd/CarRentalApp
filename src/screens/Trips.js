import React from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Activity from "../components/trips/Activity";
import Booked from "../components/trips/Booked";
import History from "../components/trips/History";

const Tab = createMaterialTopTabNavigator();

const Trips = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarActiveTintColor: '#F7941D',
            tabBarInactiveTintColor: '#000',
            tabBarIndicatorStyle: {
              backgroundColor: "#F7941D",
            },
          }}
        />
        <Tab.Screen
          name="Booked"
          component={Booked}
          options={{
            tabBarActiveTintColor: '#F7941D',
            tabBarInactiveTintColor: '#000',
            tabBarIndicatorStyle: {
              backgroundColor: "#F7941D",
            },
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarActiveTintColor: '#F7941D',
            tabBarInactiveTintColor: '#000',
            tabBarIndicatorStyle: {
              backgroundColor: "#F7941D",
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Trips;
