import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import { useTheme, light } from "../../themes";

const gridCss = css`
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-gap: var(--gap);
`;

export function Grid({ columns = 4, className = "", children }) {
  const { columnGap } = useTheme();
  return (
    <div
      className={`lu-grid ${gridCss} ${className}`}
      style={{ "--columns": columns, "--gap": `${columnGap}px` }}
    >
      {children}
    </div>
  );
}
