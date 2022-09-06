import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Body from "../components/home/Body";
import homeboxapi from "../../src/api/homeboxApi.js";

const Search = () => {
  const [boxData, setBoxData] = useState(homeboxapi);
  const [search, setSearch] = useState("");

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.viewport}>
        <Header setSearch={setSearch} />
        <Body boxData={boxData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewport: {
    backgroundColor: "#fff",
  },
  scrollView: {
    width: "100%",
  },
});

export default Search;
