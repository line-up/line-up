export const fontSizes = [12, 14, 16, 20, 24, 36, 48, 72, 80];
export const baseFontSize = fontSizes[2];
export const lineHeight = baseFontSize * 1.5;
export const baseline = lineHeight / 2;
export const blockSpacingTop = 0;
export const blockSpacingBottom = lineHeight * 1;
export const columnGap = lineHeight;
export const rowGap = lineHeight;
export const breakpoints = [768, 1024, 1280, 1536];
export const maxWidths = [768, 1024, 1536];
export const space = [0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72];

export const radii = [0, 2, 4, 16, 9999, '100%'];
export const colors = {
  white: 'white',
  blue: 'blue',
  green: 'green',
  red: 'red',
  black: '#222',
  pageBackground: '#fff',
};

export const textStyles = {
  h1: {
    color: colors.black,
    fontSize: '64px',
    fontWeight: 'bold',
    lineHeight: `${lineHeight * 3}px`,
  },
  h2: {
    color: colors.black,
    fontSize: '42px',
    fontWeight: 'bold',
    lineHeight: `${lineHeight * 2}px`,
  },
  h3: {
    color: colors.black,
    fontSize: '30px',
    fontWeight: 'bold',
    lineHeight: `${lineHeight * 2}px`,
  },
  h4: {
    color: colors.black,
    fontSize: '22px',
    fontWeight: 'bold',
    lineHeight: `${lineHeight}px`,
  },
  text: {
    color: colors.black,
    fontSize: '16px',
    lineHeight: `${lineHeight}px`,
  },
};

export const buttons = {
  primary: {
    fontSize: fontSizes[1],
    color: colors.white,
    textTransform: 'uppercase',
    backgroundColor: colors.black,
    border: 0,
    height: baseline * 4,
    transition: 'opacity .3s ease-in-out',
    '&:hover': {
      opacity: 0.8,
    },
  },
};
