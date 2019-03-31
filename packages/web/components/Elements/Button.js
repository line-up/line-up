import React from "react";
import { StyledButton } from "../Primitives";
import { useTheme } from "../../../themes";

export function Button(props) {
  const theme = useTheme();
  return <StyledButton theme={theme} {...props} />;
}
