import React from "react";
import styled from "@emotion/styled";
import { buttonStyle } from "styled-system";
import { useTheme } from "../../themes";

const StyledButton = styled.button`
  border: none;
  padding-left: 32px;
  padding-right: 32px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  ${buttonStyle};
`;

export function Button(props) {
  const theme = useTheme();
  return <StyledButton theme={theme} variant="primary" {...props} />;
}
