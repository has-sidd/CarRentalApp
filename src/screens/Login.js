import React from "react";
import { NativeBaseProvider } from "native-base";

import Background from "../components/signup/Background";
import Body from "../components/login/Body";
const Login = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Background />
      <Body navigation={navigation} />
    </NativeBaseProvider>
  );
};

export default Login;
