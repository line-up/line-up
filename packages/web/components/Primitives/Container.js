import React from "react";
import { StyledContainer } from "./Styled";
import { useTheme } from "../../../themes";

export function Container({ maxWidth = [900, 1020, 1160, 1280], ...props }) {
  const theme = useTheme();
  return (
    <StyledContainer
      pl={24}
      pr={24}
      m="auto"
      maxWidth={maxWidth}
      theme={theme}
      {...props}
    />
  );
}
