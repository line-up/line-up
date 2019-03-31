import * as baseTheme from "./base";

const darkTheme = {
  buttons: {
    primary: {
      color: baseTheme.colors.black,
      backgroundColor: baseTheme.colors.white
    }
  },
  ...baseTheme
};

export default darkTheme;
