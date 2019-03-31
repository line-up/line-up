import React from "react";
import styled from "@emotion/styled";
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  order,
  flexBasis,
  space
} from "styled-system";
import { useTheme } from "../../themes";

export const StyledFlex = styled.div`
  display: flex;
  ${alignItems};
  ${justifyContent};
  ${flexWrap};
  ${flexDirection};
  ${flex}
  ${alignContent}
  ${justifyItems};
  ${alignSelf};
  ${order};
  ${flexBasis};
  ${space}
`;

export function Flex(props) {
  const theme = useTheme();
  return <StyledFlex theme={theme} {...props} />;
}
