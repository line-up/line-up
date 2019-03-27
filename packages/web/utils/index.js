export const mapProp = (prop = [], name = "", bp = []) =>
  prop.reduce((acc, curr, i) => {
    return i && bp
      ? `${acc} \n ${bp[i]}{ --${name}: ${curr} }; `
      : `--${name}: ${curr}; `;
  }, "");
