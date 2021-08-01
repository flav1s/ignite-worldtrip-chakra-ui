import { Box, Img } from "@chakra-ui/react";
import React from "react";

const Banner = ({ isWideVersion }) => {
  const bannerImg = isWideVersion ? "Banner" : "Banner_mobile";
  return (
    <Box mb="80px">
      <Img w="100%" src={`/${bannerImg}.svg`} />
    </Box>
  );
};

export default Banner;
