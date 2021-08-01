import React from "react";
import { Flex, Box, Tooltip, Icon, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface ContinentInfoProps {
  full_description: string;
  numberOfCountries: number;
  numberOfLanguages: number;
}

const ContinentInfo = ({
  full_description,
  numberOfCountries,
  numberOfLanguages,
}) => {
  return (
    <Flex
      w="100%"
      justifyContent="space-around"
      alignItems="center"
      direction={["column", "column", "column", "row", "row"]}
      mt={["8", "8", "8", "8", "16"]}
    >
      <Box w={["80%", "80%", "80%", "40%", "40%"]}>
        <Text>{full_description}</Text>
      </Box>

      <Box
        w={["80%", "80%", "80%", "40%", "40%"]}
        mt={["4", "4", "4", "0", "0"]}
        textAlign="center"
      >
        <Flex w="100" justifyContent="space-around" alignItems="center">
          <Box textAlign="center">
            <Text
              fontSize="24px"
              lineHeight="36px"
              fontWeight="600"
              color="yellow.100"
            >
              {numberOfCountries}
            </Text>
            <Text fontSize="18px" fontWeight="600" color="gray.500" as="span">
              países
            </Text>
          </Box>
          <Box textAlign="center">
            <Text
              fontSize="24px"
              lineHeight="36px"
              fontWeight="600"
              color="yellow.100"
            >
              {numberOfLanguages}
            </Text>
            <Text fontSize="18px" fontWeight="600" color="gray.500" as="span">
              línguas
            </Text>
          </Box>
          <Box textAlign="center">
            <Text
              fontSize="24px"
              lineHeight="36px"
              fontWeight="600"
              color="yellow.100"
            >
              27
            </Text>
            <Text fontSize="18px" fontWeight="600" color="gray.500" as="span">
              Cidades 100+
              <Tooltip
                label="100+ são as melhores"
                bg="gray.500"
                color="gray.100"
                borderRadius="4"
                placement="bottom-start"
                fontWeight="300"
                fontSize="14px"
                hasArrow
              >
                <span>
                  <Icon
                    as={RiInformationLine}
                    fontSize="16px"
                    color="gray.200"
                    ml="1"
                  />
                </span>
              </Tooltip>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ContinentInfo;
