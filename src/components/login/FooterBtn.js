import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Checkbox, Button } from "native-base";

const FooterBtn = ({ navigation }) => {
  return (
    <>
      <Button
        style={styles.forgotpwBtn}
        colorScheme="info"
        size="md"
        variant="link"
        onPress={() => navigation.navigate("HomeScreen")}
      >
        Forgot Password?
      </Button>
      <Checkbox size="sm" value="one" colorScheme="info" mt={6}>
        <Text style={styles.checktxt}>I have read and agree to the terms</Text>
      </Checkbox>
      <Button
        my={1}
        onPress={() => navigation.navigate("Home")}
        borderRadius={29}
        backgroundColor="#0196EC"
        size="lg"
        mt={6}
        mb={1}
      >
        Login
      </Button>
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>Don't have an account?</Text>
        <Button
          colorScheme="info"
          size="md"
          variant="link"
          onPress={() => navigation.navigate("Signup")}
        >
          Sign Up
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footerTxt: {
    color: "#000",
    fontSize: 15,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  SignupBtn: {
    marginTop: -14,
  },
  forgotpwBtn: {
    marginTop: -14,
    marginLeft: 190,
  },
});

export default FooterBtn;
