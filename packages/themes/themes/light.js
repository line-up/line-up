import * as baseTheme from "./base";
const lightTheme = {
  buttons: {
    primary: {
      fontSize: baseTheme.fontSizes[1],
      color: baseTheme.colors.white,
      textTransform: "uppercase",
      backgroundColor: baseTheme.colors.black,
      border: 0,
      height: 48,
      transition: "opacity .3s ease-in-out",
      "&:hover": {
        opacity: 0.8
      }
    }
  },
  ...baseTheme
};

export default lightTheme;
