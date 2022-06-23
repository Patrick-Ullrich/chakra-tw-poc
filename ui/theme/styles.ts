import { Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: {
    body: {
      fontFamily: "body",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*, *::before, &::after": {
      wordWrap: "break-word",
    },
  },
};

export default styles;
