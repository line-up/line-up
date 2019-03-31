import React from 'react';
import {css} from 'emotion';
import styled from '@emotion/styled';
import {useTheme, light} from '../../themes';
import {mapProp} from '../utils';

const gridCss = css`
  display: grid;
  grid-template-columns: repeat(var(--column, 1), 1fr);
  grid-column-gap: var(--col-gap, 2em);
  grid-row-gap: var(--row-gap, 2em);
  margin-top: var(--mt);
  margin-bottom: var(--mb);
`;

const StyledGrid = styled.div`
  ${props => mapProp(props.columns, 'column', props.bp)}
  ${props => `--col-gap: ${props.colGap}px;`}
  ${props => `--row-gap: ${props.rowGap}px;`}
  ${props => `--mt: ${props.mt}px;`}
  ${props => `--mb: ${props.mb}px;`}
`;

export function Grid({columns = [1, 2, 3], className = '', children}) {
  const {
    columnGap,
    rowGap,
    breakpoints,
    blockSpacingBottom,
    blockSpacingTop,
  } = useTheme();

  return (
    <StyledGrid
      bp={breakpoints}
      columns={columns}
      colGap={columnGap}
      rowGap={rowGap}
      mt={blockSpacingTop}
      mb={blockSpacingBottom}
      className={`l-grid ${gridCss} ${className}`}>
      {children}
    </StyledGrid>
  );
}
