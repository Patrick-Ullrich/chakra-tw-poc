import { Box, extendTheme } from "@chakra-ui/react";
import { Button } from "../ui/Button";
import "./App.css";
import { Text } from "./components/Text";
import { theme as appTheme } from "./components/theme";
import { ThemeProvider } from "../ui/ThemeProvider";
import { theme as baseTheme } from "../ui/theme";
// import { Button } from "./components/Button";

const theme = extendTheme(baseTheme, appTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box my={8} mx={8}>
        <Button variant="primary">Test</Button>
        <Text>Hello</Text>
      </Box>
    </ThemeProvider>
  );
}

export default App;
