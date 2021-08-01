import React from "react";
import { Box, Flex, HStack, Icon, Img, Text } from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const TravelTypes = ({ isWideVersion }) => {
  const types = [
    {
      name: "vida notura",
      img: "NightLife",
    },
    {
      name: "praia",
      img: "Beach",
    },
    {
      name: "moderno",
      img: "Modern",
    },
    {
      name: "clássico",
      img: "Classic",
    },
    {
      name: "e mais...",
      img: "More",
    },
  ];

  if (isWideVersion) {
    return (
      <HStack display="flex" justify="space-between" align="center" mx="140px">
        {types.map((type) => (
          <Img w="113px" h="145px" src={`/${type.img}.svg`} />
        ))}
      </HStack>
    );
  }
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      padding="4"
      direction="column"
    >
      {types.map((type) => (
        <Box display="flex" alignItems="center" padding="2">
          <Icon as={RiCheckboxBlankCircleFill} color="yellow.100" mr="1" />
          <Text
            mt={["0", "2"]}
            fontWeight="600"
            fontSize="24px"
            color="gray.700"
          >
            {type.name}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default TravelTypes;
