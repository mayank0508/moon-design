import { CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import margin from 'polished/lib/shorthands/margin';
import {
  base,
  container as containerTokens,
  Container as ContainerTokens,
} from '@heathmont/sportsbet-tokens';

type ContainerSize = keyof ContainerTokens | number;

const container: (size?: ContainerSize) => CSSObject = (size = 'default') => {
  /* @TODO Revisit post-EPL */
  /* eslint-disable-next-line no-shadow */
  const containerSize = (size: ContainerSize) => {
    if (typeof size === 'number') {
      return rem(size, base.spacing);
    }

    return typeof size === 'string' && size in containerTokens
      ? rem(containerTokens[size], base.spacing)
      : 'none';
  };

  return {
    maxWidth: containerSize(size),
    padding: 0,
    ...margin(null, 'auto'),
  };
};

export { container };
