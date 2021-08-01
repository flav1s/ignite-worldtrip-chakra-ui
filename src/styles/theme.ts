import { extendTheme } from "@chakra-ui/react";

import "swiper/swiper-bundle.css";

export const theme = extendTheme({
  colors: {
    yellow: {
      "50": "rgba(255, 186, 8, 0.5)",
      "100": "#FFBA08",
    },
    black: {
      "900": "#000000",
    },
    green: {
      "100": "#47585B",
    },
    gray: {
      "100": "#DADADA",
      "200": "rgba(153, 153, 153, 0.5)",
      "500": "#999999",
    },
    white: {
      "800": "#F5F8FA",
      "900": "#ffffffff",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.800",
        color: "green.100",
      },
    },
  },
});
