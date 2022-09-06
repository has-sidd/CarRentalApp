import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

const Background = () => {
  return (
    <ImageBackground
      source={require("../../../assets/Images/home/bghome.png")}
      style={styles.bghome}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  bghome: {
    width: "100%",
    height: 535,
    marginTop: -105,
  },
});

export default Background;
