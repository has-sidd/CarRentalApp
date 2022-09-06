import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import More from "../../screens/More";

const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </>
  );
};

export default TabNav;
