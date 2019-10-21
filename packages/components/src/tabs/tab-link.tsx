/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { animation, colors } from '@heathmont/sportsbet-tokens';

import { underlineWidth, underlineOffset } from './settings';

/**
 * Types
 *
 * 1. String or React Component.
 * 2. Allows us to pass in any props associated to the `element`.
 */
/* @TODO Revisit post-EPL */
/* eslint-disable @typescript-eslint/no-explicit-any */
type TabLinkProps = {
  active?: boolean;
  element?: any /* [1] */;
  [prop: string]: any /* [2] */;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Component
 */
const TabLink: React.FC<TabLinkProps> = ({ active, element = 'a', ...props }) =>
  jsx(element, {
    ...props,
    'aria-current': active ? 'page' : undefined,
    css: {
      position: 'relative',
      padding: 0,
      paddingBottom: `${underlineOffset}px`,
      margin: 0,
      fontSize: 'inherit',
      fontFamily: 'inherit',
      lineHeight: 'inherit',
      backgroundColor: 'transparent',
      color: colors.neutral[20],
      transition: `color ${animation.speed.fast}s ease`,
      textDecoration: 'none',
      border: 0,
      appearance: 'none',
      '&:after': {
        content: '""',
        position: 'absolute',
        height: `${underlineWidth}px`,
        width: '100%',
        left: 0,
        right: 0,
        bottom: 0,
        margin: '0 auto',
        backgroundColor: colors.brand,
        transform: 'scaleX(0)',
        transition: `transform ${animation.speed.fast}s ease`,
      },
      '&:hover, &:focus, &:active, &[aria-current=page]': {
        color: colors.neutral[10],
        cursor: 'pointer',
        '&:after': {
          transform: 'scaleX(1)',
        },
      },
    },
  });

export { TabLink, TabLinkProps };