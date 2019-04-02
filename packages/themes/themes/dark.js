import * as baseTheme from './base';
const colors = baseTheme.colors;
const fontSizes = baseTheme.fontSizes;
const lineHeight = baseTheme.lineHeight;
const baseline = baseTheme.baseline;
const darkTheme = {
  ...baseTheme,
  buttons: {
    primary: {
      fontSize: baseTheme.fontSizes[1],
      color: baseTheme.colors.black,
      textTransform: 'uppercase',
      backgroundColor: baseTheme.colors.white,
      borderRadius: baseTheme.radii[4],
      height: 40,
      transition: 'opacity .3s ease-in-out',
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
  textStyles: {
    h1: {
      color: colors.white,
      fontSize: '64px',
      fontWeight: 'bold',
      lineHeight: `${lineHeight * 3}px`,
    },
    h2: {
      color: colors.white,
      fontSize: '42px',
      fontWeight: 'bold',
      lineHeight: `${lineHeight * 2}px`,
    },
    h3: {
      color: colors.white,
      fontSize: '30px',
      fontWeight: 'bold',
      lineHeight: `${lineHeight * 2}px`,
    },
    h4: {
      color: colors.white,
      fontSize: '22px',
      fontWeight: 'bold',
      lineHeight: `${lineHeight}px`,
    },
    text: {
      color: colors.white,
      fontSize: '16',
      lineHeight: `${lineHeight}px`,
    },
  },
};

export default darkTheme;
