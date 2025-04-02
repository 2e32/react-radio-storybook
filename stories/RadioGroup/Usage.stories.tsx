import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Radio from '@2e32/react-radio';

import {
  AlignmentRadioGroup,
  BorderedRadioGroup,
  CheckedRadioGroup,
  FilledRadioGroup,
  OutlinedRadioGroup,
  Tabs,
} from './components';
import * as options from './options';

const meta: Meta<typeof Radio.Group> = {
  title: 'Example/RadioGroup/usage',
  component: Radio.Group,
};

export default meta;

type Story = StoryObj<typeof Radio.Group>;

const BorderedStory = () => {
  const [value, setValue] = useState<string>();

  return <BorderedRadioGroup value={value} options={options.memorySizes} onChange={setValue} />;
};

export const Bordered: Story = {
  render: () => <BorderedStory />,
};

const OutlinedStory = () => {
  const [value, setValue] = useState<string>();

  return <OutlinedRadioGroup value={value} options={options.radios} onChange={setValue} />;
};

export const Outlined: Story = {
  render: () => <OutlinedStory />,
};

const FilledStory = () => {
  const [value, setValue] = useState<string>();

  return <FilledRadioGroup value={value} options={options.sizes} onChange={setValue} />;
};

export const Filled: Story = {
  render: () => <FilledStory />,
};

const CheckedStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <p>Your favorite hobby</p>
      <CheckedRadioGroup value={value} options={options.hobbies} onChange={setValue} />
    </>
  );
};

export const Checked: Story = {
  render: () => <CheckedStory />,
};

const AlignmentGroupStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <p>Value: {JSON.stringify(value)}</p>
      <AlignmentRadioGroup value={value} onChange={setValue} />
    </>
  );
};

export const Alignment: Story = {
  render: () => <AlignmentGroupStory />,
};

const TabStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <Tabs value={value} options={options.threeStringNumbers} onChange={setValue} />
      {value === 'One' && <p>Tab One</p>}
      {value === 'Two' && <p>Tab Two</p>}
      {value === 'Three' && <p>Tab Three</p>}
    </>
  );
};

export const Tab: Story = {
  render: () => <TabStory />,
};
