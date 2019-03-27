import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import { useTheme, light } from "../../themes";
import { mapProp } from "../utils";

const columnCss = css`
  display: block;
  grid-column-start: var(--start);
  grid-column-end: span var(--end);
  appearance: none;
  -webkit-appearance: none;
`;

const StyledColumn = styled.div`
  ${props => mapProp(props.start, "start", props.bp)}
  ${props => mapProp(props.end, "end", props.bp)}
`;

export function Column({
  start = [1, 2, 3],
  end = [1, 2, 3],
  className = "",
  children
}) {
  const { breakpoints } = useTheme();

  return (
    <StyledColumn
      start={start}
      end={end}
      bp={breakpoints}
      className={`l-col ${columnCss} ${className}`}
    >
      {children}
    </StyledColumn>
  );
}
