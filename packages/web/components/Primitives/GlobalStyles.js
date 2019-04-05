import React, {useEffect} from 'react';
import {Global, css} from '@emotion/core';

const globalStyles = css`
  @import url('https://rsms.me/inter/inter.css');

  html {
    font-family: 'Inter', sans-serif;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter var', sans-serif;
    }
  }

  /* reset */
  * {
    box-sizing: border-box;
    font: inherit;
    line-height: inherit;
  }

  body {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    padding: 0;
  }

  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  grid,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  main,
  mark,
  menu,
  nav,
  noscript,
  object,
  ol,
  output,
  p,
  pre,
  q,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a,
  a:active,
  a:visited {
    color: inherit;
  }

  /* first element has no top margin */
  :first-child {
    margin-top: unset;
  }
  :last-child {
    margin-bottom: unset;
  }
`;

export function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
