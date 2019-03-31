export const baseFontSize = 16;
export const fontSizes = [12, 14, 16, 20, 24, 36, 48, 80, 96];
export const lineHeight = baseFontSize * 1.5;
export const baseLine = lineHeight / 2;
export const blockSpacingTop = 0;
export const blockSpacingBottom = lineHeight * 1;
export const columnGap = lineHeight;
export const rowGap = lineHeight;
export const breakpoints = [768, 1024, 1280, 1536];
export const maxWidths = [16, 32, 64, 128, 256, 512, 768, 1024, 1536];
export const space = [0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96];
export const radii = [0, 2, 4, 16, 9999, '100%'];
export const colors = {
  white: 'white',
  blue: 'blue',
  green: 'green',
  red: 'red',
  black: '#222',
};

export const textStyles = {
  h1: {
    color: colors.black,
    fontSize: fontSizes[6],
  },
  h2: {
    color: colors.black,
    fontSize: fontSizes[5],
  },
  h3: {
    color: colors.black,
    fontSize: fontSizes[4],
  },
  h4: {
    color: colors.black,
    fontSize: fontSizes[3],
  },
  text: {
    color: colors.black,
    fontSize: fontSizes[2],
  },
};

export const buttons = {
  primary: {
    fontSize: fontSizes[1],
    color: colors.white,
    textTransform: 'uppercase',
    backgroundColor: colors.black,
    border: 0,
    height: 48,
    transition: 'opacity .3s ease-in-out',
    '&:hover': {
      opacity: 0.8,
    },
  },
};
