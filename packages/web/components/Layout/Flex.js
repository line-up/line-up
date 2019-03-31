import React from "react";
import { StyledFlex } from "../Primitives";
import { useTheme } from "../../../themes";

export function Flex(props) {
  const theme = useTheme();
  return <StyledFlex theme={theme} {...props} />;
}
