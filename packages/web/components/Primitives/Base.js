import React from "react";
import { StyledBase } from "./Styled";
import { useTheme } from "../../../themes";

export function Base(props) {
  const theme = useTheme();
  return <StyledBase theme={theme} {...props} />;
}
