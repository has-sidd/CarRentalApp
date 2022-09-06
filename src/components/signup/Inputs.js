import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Select, CheckIcon } from "native-base";

const Inputs = () => {
  let [licenseState, setLicenseState] = useState("");
  return (
    <>
      <Input
        mx="3"
        my="1"
        placeholder="First Name"
        w="75%"
        maxWidth="300px"
        variant="rounded"
        backgroundColor="white"
      />
      <Input
        mx="3"
        my="1"
        placeholder="Last Name"
        w="75%"
        maxWidth="300px"
        variant="rounded"
        backgroundColor="white"
      />
      <Input
        mx="3"
        my="1"
        placeholder="Email"
        w="75%"
        maxWidth="300px"
        variant="rounded"
        backgroundColor="white"
      />
      <Input
        mx="3"
        my="1"
        placeholder="Phone"
        w="75%"
        maxWidth="300px"
        variant="rounded"
        backgroundColor="white"
      />
      <Input
        mx="3"
        my="1"
        placeholder="Driver license #"
        w="75%"
        maxWidth="300px"
        variant="rounded"
        backgroundColor="white"
      />
      <Select
        selectedValue={licenseState}
        w="75%"
        my="1"
        borderRadius={29}
        maxWidth="300px"
        accessibilityLabel="Driver license state"
        placeholder="Driver license state"
        _selectedItem={{
          bg: "info.600",
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={(itemValue) => setLicenseState(itemValue)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
    </>
  );
};

export default Inputs;
