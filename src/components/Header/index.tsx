import React from "react";

import { Flex, Img, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1440}
      h={100}
      align="center"
      justify="center"
      py={27}
      mx="auto"
    >
      <Link href="/">
        <Img h={45} w={185} src="/Logo.svg" />
      </Link>
    </Flex>
  );
};

export default Header;
