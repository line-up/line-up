import React, {useEffect} from 'react';
import {Global, css} from '@emotion/core';

const globalStyles = css`
  .show-base-grid {
    background-image: repeating-linear-gradient(
      0deg,
      rgba(120, 120, 120, 0.05),
      rgba(120, 120, 120, 0.05) 1px,
      transparent 1px,
      transparent calc(var(--baseline) / 2),
      rgba(20, 230, 245, 0.3) calc(calc(var(--baseline) / 2)),
      rgba(20, 230, 245, 0.3) calc(calc(var(--baseline) / 2) + 1px),
      transparent calc(calc(var(--baseline) / 2) + 1px),
      transparent var(--baseline)
    );
    background-repeat: repeat-y;
    background-size: 100% var(--baseline);
    background-position: 0 4px;
  }
`;

export function DebugBaseLine({baseline = 8, show, id}) {
  useEffect(() => {
    const el = document.getElementById(id) || document.body;
    el.style.setProperty('--baseline', `${baseline}px`);
    el.classList.toggle('show-base-grid');
  }, [show]);

  return <Global styles={globalStyles} />;
}
