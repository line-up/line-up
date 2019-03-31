import * as baseTheme from "./base";
const colors = baseTheme.colors;
const fontSizes = baseTheme.fontSizes;
const darkTheme = {
  ...baseTheme,
  buttons: {
    primary: {
      fontSize: baseTheme.fontSizes[1],
      color: baseTheme.colors.black,
      textTransform: "uppercase",
      backgroundColor: baseTheme.colors.white,
      borderRadius: baseTheme.radii[4],
      height: 40,
      transition: "opacity .3s ease-in-out",
      "&:hover": {
        opacity: 0.8
      }
    }
  },
  textStyles: {
    h1: {
      color: colors.white,
      fontSize: fontSizes[6]
    },
    h2: {
      color: colors.white,
      fontSize: fontSizes[5]
    },
    h3: {
      color: colors.white,
      fontSize: fontSizes[4]
    },
    h4: {
      color: colors.white,
      fontSize: fontSizes[3]
    },
    text: {
      color: colors.white,
      fontSize: fontSizes[2]
    }
  }
};

export default darkTheme;
