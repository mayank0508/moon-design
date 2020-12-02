import styled from 'styled-components';
import { rem, mq } from '@heathmont/moon-utils';

const ToastContainer = styled.div<any>(
  ({ theme: { color, space, zIndex, breakpoint }, position }) => [
    {
      width: 'fit-content',
    },
    (position === 'bottom' || position === 'top') && {
      position: 'fixed',
      left: '50%',
      transform: 'translate(-50%, 0)',
      zIndex: zIndex.dialog,
      marginBottom: space.default,
      minWidth: rem(180),
      maxWidth: `calc(100vw - ${space.small * 2}px)`,
      [mq(breakpoint.medium)]: {
        margin: space.default,
      },
      [mq(breakpoint.large)]: {
        maxWidth: '30%',
        width: 'fit-content',
        left: 0,
        transform: 'none',
      },
    },
    position === 'bottom' && {
      bottom: 0,
    },
    position === 'top' && {
      top: '10%',
    },
    {
      paddingTop: rem(12),
      paddingBottom: rem(12),
      paddingLeft: rem(space.default),
      paddingRight: rem(space.default),
      boxShadow:
        '0px 6.4px 14px 0px rgba(0,0,0,0.52), 0px 1.2px 3.6px 0px rgba(0,0,0,0.4)',
      backgroundColor: color.bulma[100],
      borderRadius: rem(12),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: rem(space.default),
      },
    },
  ]
);

export default ToastContainer;
