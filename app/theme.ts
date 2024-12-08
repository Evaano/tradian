import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";
import { Inter } from "next/font/google";

const themeOverride = createTheme({
  other: {
    backgroundColor: "#f6f6f6",
  },
  colors: {
    // #f9ac4e - earth-yellow-5
    "earth-yellow": [
      "#fcd09a",
      "#fbc787",
      "#fabe74",
      "#fab561",
      "#f9ac4e",
      "#f8a33b",
      "#f89a28",
      "#f79115",
      "#f08808",
      "#dd7d08",
    ],

    //#07393C
    "primary-color": [
      "#ffebeb",
      "#fbd4d4",
      "#f4a6a5",
      "#ee7474",
      "#ea4c4a",
      "#e7332f",
      "#e72521",
      "#cd1916",
      "#b71212",
      "#a1040c",
    ],
    dark: [
      "#aeb2c8", // Light grey-blue
      "#7c829f", // Muted dark blue-grey
      "#565d7a", // Darker blue-grey
      "#404662", // Deep blue-black
      "#2f354c", // Darker blue-black
      "#252a3d", // Very dark blue-black
      "#1b2031", // Near black-blue
      "#141825", // Almost black-blue
      "#0a0e18", // Dark black-blue
      "#03040c", // Pure black with a subtle blue hue
    ],
  },
  fontFamily: "Inter",
  headings: { fontFamily: "sans-serif" },
  defaultRadius: "md",
  primaryColor: "primary-color",
  primaryShade: 7,
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
