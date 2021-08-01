import React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";
import Carousel from "../components/Carousel";

export default function Home() {
  const isWideVersion = useBreakpointValue({ base: false, md: true });
  return (
    <Box w="100vw" h="100vh" overflowX="hidden">
      <Header />
      <Banner isWideVersion={isWideVersion} />
      <TravelTypes isWideVersion={isWideVersion} />

      <Flex align="center" justify="center" mt="80px">
        <Divider w={90} />
      </Flex>

      <Flex direction="column" align="center" mt="52px" justify="center">
        <Heading fontSize={["20px", "36px"]} lineHeight={10} as="p">
          Vamos nessa?
        </Heading>
        <Heading fontSize={["20px", "36px"]} lineHeight={10} as="p">
          Então escolha seu continente
        </Heading>
      </Flex>
      <Carousel />
    </Box>
  );
}
