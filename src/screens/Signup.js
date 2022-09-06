import React from "react";
import { NativeBaseProvider } from "native-base";
import Background from "../components/signup/Background";
import Body from "../components/signup/Body";

const Signup = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Background />
      <Body navigation={navigation} />
    </NativeBaseProvider>
  );
};

export default Signup;
