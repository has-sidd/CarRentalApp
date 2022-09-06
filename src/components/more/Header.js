import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button } from "native-base";

const header = () => {
  return (
    <View style={styles.main}>
      <Image
        source={require("../../../assets/Images/more/largeUser.png")}
        style={styles.circle}
      />
      <View style={styles.submain}>
        <Text style={styles.title}>Jimmy Jas Car Rental</Text>
        <Button
          colorScheme="dark"
          size="lg"
          my={0}
          py={0}
          variant="link"
          onPress={() => navigation.navigate("Login")}
          style={styles.subtitle}
        >
          View and edit profile
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: "relative",
    top: 140,
    left: 20,
  },
  title: {
    position: "relative",
    fontSize: 27,
    fontWeight: "bold",
    color: "#000",
    top: 140,
  },
  subtitle: {
    top: 140,
  },
  main: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  submain: {
    alignItems: "flex-start",
  },
});

export default header;
