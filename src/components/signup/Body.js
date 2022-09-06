import React from "react";
import { Text, StyleSheet } from "react-native";
import { Box } from "native-base";
import Inputs from "./Inputs";
import FooterBtn from "./FooterBtn";

const Body = ({ navigation }) => {
  return (
    <Box style={styles.inputBox} alignItems="center">
      <Text style={styles.headerText}>
        Looks like you don't have an account. Lets create a new account here.
      </Text>
      <Inputs />
      <FooterBtn navigation={navigation} />
    </Box>
  );
};

const styles = StyleSheet.create({
  inputFields: {
    fontSize: 21,
    borderRadius: 29,
    backgroundColor: "#fff000",
  },
  inputBox: {
    marginTop: -197,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 40,
    marginBottom: 5,
  },
});

export default Body;
