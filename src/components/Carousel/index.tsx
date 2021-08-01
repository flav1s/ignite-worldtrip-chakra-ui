import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Text, Heading, Flex, Link } from "@chakra-ui/react";

SwiperCore.use([Navigation, Pagination]);

import db from "../../../db.json";

const Carousel = () => {
  const { continents } = db;
  return (
    <Flex
      mx="auto"
      my="52px"
      w="90%"
      justifyContent="center"
      alignItems="center"
    >
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay
        onInit={(swiper) => console.log("Swiper initialized", swiper)}
        onSlideChange={(swiper) =>
          console.log("slide change", swiper.activeIndex)
        }
        onSwiper={(swiper) => console.log(swiper)}
        initialSlide={0}
        style={{
          width: "1240px",
          height: "450px",
        }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Link href={`/continent/${continent.slug}`}>
              <Flex
                direction="column"
                justify="center"
                align="center"
                backgroundImage={`url(${continent.url})`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                cursor="pointer"
                w="100%"
                h={["250px", "450px"]}
              >
                <Heading color="gray.100" lineHeight={10}>
                  {continent.name}
                </Heading>
                <Text color="gray.100" fontWeight="bold" lineHeight={10} as="p">
                  {continent.description}
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Carousel;
