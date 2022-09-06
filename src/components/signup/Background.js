import React from "react";
import { StyleSheet, ImageBackground, Image, View } from "react-native";

const Background = () => {
  return (
    <ImageBackground
      source={require("../../../assets/Images/signupScreen/orangePath2.png")}
      style={styles.orangePathImg}
    >
      <View>
        <Image
          source={require("../../../assets/Images/signupScreen/car1.png")}
          style={styles.carImg}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  carImg: {
    width: "100%",
    marginTop: -100,
  },
  orangePathImg: {
    width: "100%",
    height: 500,
  },
});

export default Background;
