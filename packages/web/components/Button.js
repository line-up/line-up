import React from 'react';
import { css } from 'linaria';
import { useTheme, light } from '../../themes';

const buttonClassName = css`
  background-color: black;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

function Button({ onClick, children }) {
  const { colors: { primary, secondary } } = useTheme();

  return (
    <div
      className={buttonClassName}
      onClick={onClick}
      style={{ color: primary, backgroundColor: secondary }}
    >
      {children}
    </div>
  );
}

export default Button;
