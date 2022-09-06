import React, { useState } from "react";
import { Input, Select, CheckIcon, Button } from "native-base";

const Inputs = () => {
  let [licenseState, setLicenseState] = useState("");
  const [hide, setHide] = useState(true);

  const handleClick = () => setHide(!hide);
  return (
    <>
      <Input
        mx="3"
        my="2"
        placeholder="Email"
        w="75%"
        maxWidth="300px"
        variant="rounded"
        backgroundColor="white"
      />
      <Input
        type={hide ? "password" : "text"}
        mx="3"
        my="2"
        placeholder="Password"
        w="75%"
        maxWidth="300px"
        variant="rounded"
        backgroundColor="white"
        InputRightElement={
          <Button
            size="xs"
            backgroundColor="#0196EC"
            rounded="none"
            w="1/6"
            h="full"
            onPress={handleClick}
          >
            {hide ? "Show" : "Hide"}
          </Button>
        }
      />
      <Input
        mx="3"
        my="2"
        placeholder="Driver license #"
        w="75%"
        maxWidth="300px"
        variant="rounded"
        backgroundColor="white"
      />
      <Select
        selectedValue={licenseState}
        w="75%"
        my="2"
        borderRadius={29}
        backgroundColor="white"
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
