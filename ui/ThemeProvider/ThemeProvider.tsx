import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Record<string, any>;
}) => <ChakraProvider theme={theme}>{children}</ChakraProvider>;
