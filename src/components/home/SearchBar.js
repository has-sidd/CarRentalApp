import React from "react";
import { VStack, Input, NativeBaseProvider } from "native-base";
import { View, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = ({ setSearch }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.searchbar}>
        <VStack w="80%" space={5} alignSelf="center">
          <Input
            placeholder="City, Airports, Hotels or Address"
            width="100%"
            borderRadius="50"
            onChangeText={(text) => {
              setSearch(text);
            }}
            py="3"
            px="0"
            fontSize="17"
            backgroundColor={"#fff"}
            InputLeftElement={
              <AntDesign
                style={{ marginHorizontal: 10 }}
                name="search1"
                size={25}
                color="#0196EC"
              />
            }
          />
        </VStack>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    position: "absolute",
    width: "100%",
    top: -400,
  },
});

export default SearchBar;
