import React from "react";
import Options from "./Options";
import { Divider } from "native-base";

const Body = ({ options }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <Options
            key={option.id}
            iconPath={option.iconPath}
            title={option.title}
          />
        );
      })}
      <Divider
        thickness={2}
        my="2"
        _light={{
          bg: "yellow.500",
        }}
        _dark={{
          bg: "yellow.50",
        }}
      />
    </>
  );
};

export default Body;
