import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Button from "../trips/Button";

const Body = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Become a host</Text>
      <Text style={styles.para}>
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
      <View style={styles.btnCont}>
        <Button title="Get Started" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: "Segoe UI",
    color: "#0196EC",
    marginTop: 40,
    fontWeight: "bold",
  },
  btnCont: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  body: {
    marginHorizontal: 20,
  },
  para: {
    fontSize: 18,
    color: "#000",
    fontWeight: "Regular",
    letterSpacing: 1,
    marginTop: 25,
  },
});

export default Body;
