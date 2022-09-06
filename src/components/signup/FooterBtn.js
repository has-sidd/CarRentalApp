import React from "react";

import { Text, StyleSheet, View } from "react-native";

import { Box, Checkbox, Button } from "native-base";
import Inputs from "./Inputs";

const FooterBtn = ({ navigation }) => {
  return (
    <>
      <Checkbox size="sm" value="one" colorScheme="info">
        <Text style={styles.checktxt}>I have read and agree to the terms</Text>
      </Checkbox>
      <Button
        my={1}
        onPress={() => console.log("hello world")}
        borderRadius={29}
        backgroundColor="#0196EC"
      >
        Sign Up
      </Button>
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>Already have an account?</Text>
        <Button
          colorScheme="warning"
          size="md"
          variant="link"
          onPress={() => navigation.navigate("Login")}
          borderRadius={29}
        >
          Login
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footerTxt: {
    color: "#000",
    fontSize: 13,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checktxt: {
    fontSize: 13,
  }
});

export default FooterBtn;
