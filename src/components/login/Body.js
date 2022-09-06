import React from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";
import Inputs from "./Inputs";
import FooterBtn from "./FooterBtn";

const Body = ({ navigation }) => {
  return (
    <Box style={styles.inputBox} alignItems="center">
      <Inputs />
      <FooterBtn navigation={navigation} />
    </Box>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    marginTop: -170,
  },
});

export default Body;
