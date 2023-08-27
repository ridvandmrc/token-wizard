import { createTheme } from "../dist";
import { defaultLightBrand, radius, spacing, shadow } from "./data";

export const testTheme = () => {
  createTheme({
    themeName: "Ridvan Theme",
    darkTokens: defaultLightBrand,
    lightTokens: defaultLightBrand,
    radiusTokens: radius,
    shadowTokens: shadow,
    spacingTokens: spacing,
  }).toScss("./test/test.scss");
};
