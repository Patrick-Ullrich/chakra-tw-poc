import { spacing } from "./spacing";

const largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
};

const container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const sizes = {
  ...spacing,
  ...largeSizes,
  container,
};

export default sizes;
