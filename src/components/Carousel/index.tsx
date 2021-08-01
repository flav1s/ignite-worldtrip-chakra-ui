import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Virtual } from "swiper/core";
import { Text, Heading, Flex } from "@chakra-ui/react";

SwiperCore.use([Pagination]);
SwiperCore.use([Virtual]);

const Carousel = () => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      virtual
      style={{
        width: "1240px",
        height: "450px",
        marginTop: "52px",
        marginBottom: "52px",
      }}
    >
      <SwiperSlide>
        <Flex
          direction="column"
          justify="center"
          align="center"
          style={{
            backgroundImage: "url(/Europe.jpeg)",
            backgroundSize: "cover",
            width: "1240px",
            height: "450px",
          }}
        >
          <Heading color="gray.100" lineHeight={10}>
            Europa
          </Heading>
          <Text color="gray.100" fontWeight="bold" lineHeight={10} as="p">
            O continente mais antigo.
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          direction="column"
          justify="center"
          align="center"
          style={{
            backgroundImage: "url(/America.jpeg)",
            width: "1240px",
            height: "450px",
          }}
        >
          <Heading color="gray.100" lineHeight={10}>
            América
          </Heading>
          <Text color="gray.100" fontWeight="bold" lineHeight={10} as="p">
            Neque porro quisquam est qui dolorem.
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          direction="column"
          justify="center"
          align="center"
          style={{
            backgroundImage: "url(/Asia.jpeg)",
            width: "1240px",
            height: "450px",
          }}
        >
          <Heading color="gray.100" lineHeight={10}>
            Ásia
          </Heading>
          <Text color="gray.100" fontWeight="bold" lineHeight={10} as="p">
            Neque porro quisquam est qui dolorem.
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          direction="column"
          justify="center"
          align="center"
          style={{
            backgroundImage: "url(/Oceania.jpeg)",
            width: "1240px",
            height: "450px",
          }}
        >
          <Heading color="gray.100" lineHeight={10}>
            Oceania
          </Heading>
          <Text color="gray.100" fontWeight="bold" lineHeight={10} as="p">
            Neque porro quisquam est qui dolorem.
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          direction="column"
          justify="center"
          align="center"
          style={{
            backgroundImage: "url(/Africa.jpeg)",
            width: "1240px",
            height: "450px",
          }}
        >
          <Heading color="gray.100" lineHeight={10}>
            África
          </Heading>
          <Text color="gray.100" fontWeight="bold" lineHeight={10} as="p">
            Neque porro quisquam est qui dolorem.
          </Text>
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
