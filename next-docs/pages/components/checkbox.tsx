// @ts-nocheck
import React from 'react';

import { Checkbox } from '@heathmont/moon-core';

import Preview from '../../components/codePreview/Preview';

const Example = () => {
  return <Checkbox label="I agree to receive bonus & marketing emails." />;
};

const ExampleDisabled = () => {
  return (
    <Checkbox disabled label="I agree to receive bonus & marketing emails." />
  );
};

const ExampleChecked = () => {
  return (
    <Checkbox checked label="I agree to receive bonus & marketing emails." />
  );
};

const ExampleAriaLabel = () => {
  return <Checkbox ariaLabel="Description of the checkbox's purpose." />;
};

export default function PageAccordion() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Checkbox</h1>
        <p className="text-lg mt-4">
          Checkboxes are used as a list in our forms and signup pages so users
          can select options of their choice. Users are free to choose how many
          options to select, from zero to all of them.
        </p>
        <p className="text-lg mt-4">
          As each checkbox is independent, this means that additional checkboxes
          do not affect any other selections… or planets. .
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Checkbox"
          preview={<Example />}
          code={`import { Checkbox } from '@heathmont/moon-core';

<Checkbox disabled label="I agree to receive bonus & marketing emails." />
`}
        />
      </section>

      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<ExampleDisabled />}
          code={`import { Checkbox } from '@heathmont/moon-core';

<Checkbox disabled label="I agree to receive bonus & marketing emails." />
`}
        />
      </section>

      {/* Checked */}
      <section className="mt-8">
        <Preview
          title="Checked"
          preview={<ExampleChecked />}
          code={`import { Checkbox } from '@heathmont/moon-core';

<Checkbox checked label="I agree to receive bonus & marketing emails." />
`}
        />
      </section>

      {/* Aria Label */}
      <section className="mt-8">
        <Preview
          title="Aria label"
          preview={<ExampleAriaLabel />}
          code={`import { Checkbox } from '@heathmont/moon-core';

<Checkbox ariaLabel="Description of the checkbox's purpose." />
`}
        />
      </section>
    </>
  );
}
