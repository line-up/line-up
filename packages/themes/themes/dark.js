import * as baseTheme from "./base";

const darkTheme = {
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
  ...baseTheme
};

export default darkTheme;
