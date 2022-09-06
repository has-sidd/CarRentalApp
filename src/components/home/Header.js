import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Background from "./Background";
import SearchBar from "./SearchBar";

const Header = ({ setSearch }) => {
  return (
    <>
      <Background />
      <SearchBar setSearch={setSearch} />
      <View style={styles.txtblock}>
        <Text style={styles.headertxt}>Jimmy Jas{"\n"}Car Rental</Text>
        <Text style={styles.subheading}>RIDE IN STYLE</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headertxt: {
    color: "#F7941D",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Segoe UI",
  },
  subheading: {
    color: "#0196EC",
    fontSize: 18,
    fontWeight: "Regular",
    fontFamily: "Segoe UI",
    marginLeft: 6,
  },
  txtblock: {
    marginLeft: 20,
  },
});

export default Header;
