import React from "react";
import { StyledGrid } from "../Primitives";
import { useTheme } from "../../../themes";

export function Grid(props) {
  const theme = useTheme();
  return <StyledGrid theme={theme} {...props} />;
}
