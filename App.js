/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { Node } from "react";
import { useColorScheme, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signup from "./src/screens/Signup";
import Login from "./src/screens/Login";
import Search from "./src/screens/Search";
import More from "./src/screens/More";
import Home from "./src/screens/Home";
import { Stack } from "native-base";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
