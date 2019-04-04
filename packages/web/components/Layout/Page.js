import React from 'react';
import {Base} from '../Primitives';
import {useTheme} from '../../../themes';

export function Page(props) {
  return <Base bg="pageBackground" {...props} />;
}
