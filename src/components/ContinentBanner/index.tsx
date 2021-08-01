import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ContinentBannerProps {
  name: string;
  url: string;
}

const ContinentBanner = ({ name, url }) => {
  return (
    <Flex
      backgroundImage={`url(${url})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      w="100%"
      h="500px"
      direction="column-reverse"
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "flex-start"]}
      pl="8"
      pb="8"
    >
      <Text fontSize="48px" color="white.800" fontWeight="600">
        {name}
      </Text>
    </Flex>
  );
};

export default ContinentBanner;
