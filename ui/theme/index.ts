import { ThemeConfig, ThemeDirection } from "@chakra-ui/react";
import { Button } from "./components/Button";
import foundations from "./foundations";
import styles from "./styles";

const direction: ThemeDirection = "ltr";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "affiliate",
};

export const theme = {
  ...foundations,
  styles,
  components: {
    Button,
  },
  config,
  direction,
};
