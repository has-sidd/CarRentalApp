import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Footer = ({ footerBtn, navigation }) => {
  const [activeState, setActiveState] = useState(0)

  const handlePress = (id, nav) => {
    navigation.navigate(nav)
    setActiveState(id)
  }

  return (
    <NativeBaseProvider>
      <View style={styles.footer}>
        {footerBtn.map((footer, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => handlePress(footer.id, footer.nav)}
            >
              <View style={styles.buttons}>
                <Image style={{tintColor: activeState == footer.id ? '#0196EC' : '#000'}} source={footer.iconPath} />
                <Text>{footer.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
    width: "100%",
    borderTopColor: "#0196EC",
  },
  buttons: {
    alignItems: "center",
    marginVertical: 15,
  },
});

export default Footer;
