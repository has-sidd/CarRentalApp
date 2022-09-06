import { View } from "react-native";
import React from "react";
import HomeBox from "./HomeBox";

const Body = ({ boxData }) => {
  return (
    <View style={{marginVertical: 60}}>
      {boxData.map((box, key) => {
        return (
          <HomeBox
            key={key}
            iconPath={box.iconPath}
            title={box.title}
            description={box.description}
          />
        );
      })}
    </View>
  );
};

export default Body;
