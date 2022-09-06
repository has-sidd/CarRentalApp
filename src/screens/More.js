import React, { useState } from "react";
import { View } from "react-native";
import { NativeBaseProvider } from "native-base";
import UpperBackground from "../components/more/UpperBackground";
import LowerBackground from "../components/more/LowerBackground";
import Body from "../components/more/Body";
import Footer from "../components/more/Footer";
import moreOptionsApi from "../api/moreOptionsApi";

const More = ({ navigation }) => {
  const [options, setOptions] = useState(moreOptionsApi);
  return (
    <NativeBaseProvider>
      <View>
        <UpperBackground />
        <Body options={options} />
        <Footer navigation={navigation} />
        <LowerBackground />
      </View>
    </NativeBaseProvider>
  );
};

export default More;
