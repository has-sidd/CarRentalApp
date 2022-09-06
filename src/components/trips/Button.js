import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const Button = ({ title }) => {
  return (
    <>
      <Pressable style={styles.button}>
        <Text style={styles.btntext}>{title}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  btntext: {
    fontSize: 28,
    letterSpacing: 0.25,
    color: "#fff",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: "#F7941D",
  },
});

export default Button;
