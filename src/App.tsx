import { Box, extendTheme } from "@chakra-ui/react";
import { Button } from "../ui/Button";
import { Text } from "./components/Text";
import { theme as appTheme } from "./components/theme";
import { ThemeProvider } from "../ui/ThemeProvider";
import { theme as baseTheme } from "../ui/theme";
// import { Button } from "./components/Button";

const theme = extendTheme(baseTheme, appTheme);

function App() {
  return (
    <div className="flex flex-row">
      <div className="mx-5">
        <Button onClick={() => console.log("primary")} variant="primary">
          Test
        </Button>
      </div>
      <div className="mx-5">
        <Button onClick={() => console.log("secondary")} variant="secondary">
          Test
        </Button>
      </div>
    </div>
  );
}

export default App;
