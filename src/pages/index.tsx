import React from "react";
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <Box w="100vw" h="100vh" overflowX="hidden">
      <Header />
      <Banner />
      <TravelTypes />

      <Flex align="center" justify="center" mt="80px">
        <Divider w={90} />
      </Flex>

      <Flex direction="column" align="center" mt="52px" justify="center">
        <Heading fontSize="36px" lineHeight={10} as="p">
          Vamos nessa?
        </Heading>
        <Heading fontSize="36px" lineHeight={10} as="p">
          Então escolha seu continente
        </Heading>
      </Flex>
    </Box>
  );
}
