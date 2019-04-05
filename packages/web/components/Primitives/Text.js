import React from 'react';
import {StyledText} from '../Primitives';
import {useTheme} from '../../../themes';

export function Text(props) {
  const theme = useTheme();
  return <StyledText theme={theme} textStyle="text" {...props} />;
}
