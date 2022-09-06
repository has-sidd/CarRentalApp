import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const HomeBox = ({ iconPath, title, description }) => {
  return (
    <View style={styles.box}>
      <View style={styles.boxHeader}>
        <Image source={iconPath} />
        <Text style={styles.heading}>{title}</Text>
      </View>
      <Text style={styles.boxBody}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 30,
    marginLeft: 16,
    marginBottom: 40,
  },
  boxHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    color: "#F7941D",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Segoe UI",
  },
  boxBody: {
    paddingHorizontal: 50,
    fontSize: 20,
    marginTop: 15,
  },
});

export default HomeBox;
