import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Header from "./Header";

const UpperBackground = () => {
  return (
    <>
      <ImageBackground
        source={require("../../../assets/Images/more/Path5.png")}
        style={styles.bgupper}
      >
        <Header />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bgupper: {
    width: "100%",
    height: 300,
    marginTop: -105,
  },
});

export default UpperBackground;
