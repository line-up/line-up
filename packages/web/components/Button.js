import React from 'react';

function Button({ onClick, children }) {
  return (
    <div onClick={onClick}>{children}</div>
  );
}

export default Button;
