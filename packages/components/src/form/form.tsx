import * as React from 'react';
import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { rem } from '@heathmont/sportsbet-utils';

import { listPlain, listPlainItem } from '../lists/lists';
import { inputSpacingY } from '../private/input/settings';
import { Input } from '../private/input/input';

/**
 * Types
 */
/* Prevents TypeScript errors when using HTMLFormElement directly */
type FormElement = Pick<HTMLFormElement, Exclude<keyof HTMLFormElement, ''>>;

type FormProps = FormElement & {
  legend: string;
  maxWidth?: string;
  fullWidth?: boolean;
};

const FormList = styled.ul(listPlain, { marginTop: 0 });

const Fieldset = styled.fieldset({
  border: 0,
});

/**
 * Components
 */
const Form: React.FC<FormProps> = ({
  children,
  legend,
  maxWidth,
  fullWidth,
  ...props
}) => {
  return (
    <form css={{ maxWidth, width: fullWidth ? '100%' : 'auto' }} {...props}>
      <Fieldset>
        <legend css={hideVisually()}>{legend}</legend>
        <FormList>{children}</FormList>
      </Fieldset>
    </form>
  );
};

/**
 * `<any>` justification: https://coingaming.atlassian.net/browse/SPO-4963.
 */
const FormItem = styled.li<any>(({ theme: { space } }) => [
  listPlainItem,
  { marginBottom: rem(space.small) },
]);

const FormCombo = styled.div({
  display: 'block',
  position: 'relative',
});

const FormComboInput = styled.div(({ theme: { radius } }) => ({
  [`${Input}`]: {
    borderRadius: rem(radius.largest),
  },
}));

/**
 * 1. We want our button located in the same position as an Input Icon
 */
const FormComboButton = styled.div(({ theme }) => ({
  position: 'absolute',
  right: rem(inputSpacingY(theme) / 2),
  bottom: rem(inputSpacingY(theme) / 2) /* [1] */,
}));

export {
  Form,
  FormProps,
  FormItem,
  FormCombo,
  FormComboInput,
  FormComboButton,
};
