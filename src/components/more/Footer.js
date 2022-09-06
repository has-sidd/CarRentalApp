import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const Footer = ({ navigation }) => {
  return (
    <>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <View style={styles.buttons}>
            <Image source={require("../../../assets/Images/more/logout.png")} />
            <Text style={styles.title}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  box: {
    marginHorizontal: 50,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    color: "#000",
    marginLeft: 15,
  },
});

export default Footer;
