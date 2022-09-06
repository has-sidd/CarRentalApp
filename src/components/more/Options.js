import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const Options = ({ iconPath, title }) => {
  return (
    <>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.buttons}>
            <Image source={iconPath} />
            <Text style={styles.title}>{title}</Text>
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
    marginVertical: 10,
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

export default Options;
