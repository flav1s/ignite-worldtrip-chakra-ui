import React from "react";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import ContinentCard from "../ContinentCard";

const Gallery = ({ countries }) => {
  return (
    <Flex w="100%" direction="column" mt="16" mb="8" px="8">
      <Heading mb="8" fontSize="36px" fontWeight="500" color="gray.600">
        Cidades 100+
      </Heading>
      <SimpleGrid as="ul" minChildWidth="256px" spacing="45px">
        {countries.map((country) => (
          <ContinentCard
            key={country.name}
            capital={country.capital}
            name={country.name}
            image={country.image}
            flag={country.flag}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Gallery;
