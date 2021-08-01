import React from "react";
import { HStack, Img } from "@chakra-ui/react";

const TravelTypes = () => {
  return (
    <HStack display="flex" justify="space-between" align="center" mx="140px">
      <Img w="113px" h="145px" src="/NightLife.svg" />
      <Img w="113px" h="145px" src="/Beach.svg" />
      <Img w="113px" h="145px" src="/Modern.svg" />
      <Img w="113px" h="145px" src="/Classic.svg" />
      <Img w="113px" h="145px" src="/More.svg" />
    </HStack>
  );
};

export default TravelTypes;
