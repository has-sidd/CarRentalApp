import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const LowerBackground = () => {
  return (
    <>
      <ImageBackground
        source={require("../../../assets/Images/more/Path7.png")}
        style={styles.bglower}
      ></ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bglower: {
    width: "100%",
    height: 111,
    marginTop: 50,
  },
});

export default LowerBackground;
