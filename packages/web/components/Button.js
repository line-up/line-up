import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import { useTheme, light } from "../../themes";

const buttonClassName = css`
  border: none;
  padding-left: 32px;
  padding-right: 32px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover: {
    opacity: 0.6;
  }
`;

const StyledButton = styled.button`
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export function Button({ onClick, children }) {
  const {
    colors: { primary, secondary }
  } = useTheme();

  const colorMap = { color: primary, backgroundColor: secondary };
  return (
    <StyledButton className={buttonClassName} onClick={onClick} {...colorMap}>
      {children}
    </StyledButton>
  );
}
