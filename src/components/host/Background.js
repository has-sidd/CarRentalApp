import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Background = () => {
  return (
    <>
      <ImageBackground
        source={require("../../../assets/Images/host/bg.png")}
        style={styles.bghome}
      ></ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bghome: {
    width: "100%",
    height: 300,
    marginTop: 0,
  },
});

export default Background;
