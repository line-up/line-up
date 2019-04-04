import React from 'react';
import {StyledBackground} from './Styled';
import {useTheme} from '../../../themes';

export function Background({url, ...props}) {
  const theme = useTheme();
  return (
    <StyledBackground
      theme={theme}
      backgroundImage={`url(${url})`}
      {...props}
    />
  );
}
