import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import Search from "./Search";
import More from "./More";
import Messages from "./Messages";
import Trips from "./Trips";
import Host from "./Host";

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <>
      <Tab.Navigator initialRouteName="Search">
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <AntDesign
                style={{ marginHorizontal: 10 }}
                name="search1"
                size={25}
                color={color}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarActiveTintColor: "#0196EC",
            tabBarInactiveTintColor: "#000",
          }}
        />
        <Tab.Screen
          name="Trips"
          component={Trips}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <FontAwesome
                name="road"
                style={{ marginHorizontal: 10 }}
                size={25}
                color={color}
                tintColor="#0196EC"
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarActiveTintColor: "#0196EC",
            tabBarInactiveTintColor: "#000",
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <AntDesign
                name="message1"
                style={{ marginHorizontal: 10 }}
                size={25}
                color={color}
                tintColor="#0196EC"
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarActiveTintColor: "#0196EC",
            tabBarInactiveTintColor: "#000",
          }}
        />
        <Tab.Screen
          name="Host"
          component={Host}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <FontAwesome5
                name="car-side"
                style={{ marginHorizontal: 10 }}
                size={25}
                color={color}
                tintColor="#0196EC"
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarActiveTintColor: "#0196EC",
            tabBarInactiveTintColor: "#000",
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            headerShown: false,
            tabBarVisible: false,
            tabBarIcon: ({ color }) => (
              <Feather
                name="more-horizontal"
                style={{ marginHorizontal: 10 }}
                size={32}
                color={color}
                tintColor="#0196EC"
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarActiveTintColor: "#0196EC",
            tabBarInactiveTintColor: "#000",
            headerStyle: {
              backgroundColor: "#0196EC",
            },
            headerTintColor: "#fff",
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
