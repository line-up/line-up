import React from "react";
import styled from "@emotion/styled";
import {
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridArea,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  space
} from "styled-system";
import { useTheme } from "../../themes";

const StyledGrid = styled.div`
  display: grid;
  ${gridGap};
  ${gridRowGap};
  ${gridColumnGap};
  ${gridColumn};
  ${gridRow}
  ${gridArea}
  ${gridAutoFlow};
  ${gridAutoRows};
  ${gridAutoColumns};
  ${gridTemplateRows};
  ${gridTemplateColumns};
  ${gridTemplateAreas};
  ${space}
`;

export function Grid(props) {
  const theme = useTheme();
  return <StyledGrid theme={theme} {...props} />;
}
