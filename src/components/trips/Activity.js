import React from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import Button from "./Button";

const Activity = () => {
  return (
    <>
      <ImageBackground
        source={require("../../../assets/Images/trips/bg.png")}
        style={styles.bghome}
      ></ImageBackground>
      <Text style={styles.text}>No Activity</Text>
      <View style={styles.btnCont}>
        <Button title="Find Cars" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bghome: {
    width: "100%",
    height: 380,
    marginTop: 0,
  },
  text: {
    fontSize: 35,
    fontFamily: "Segoe UI",
    color: "#505050",
    textAlign: "center",
    marginTop: 20,
  },
  btnCont: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
});

export default Activity;
