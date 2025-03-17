import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Radio from '@2e32/react-radio';
//import { RadioGroup } from '@2e32/react-radio';
//import '@2e32/react-radio/css';

import { AlignmentRadio, BorderedRadio, Checked, Group, Segmented, Tabs } from './components';

const meta: Meta<typeof Radio.Group> = {
  title: 'Example/RadioGroup/usage',
  component: Radio.Group,
};

export default meta;

type Story = StoryObj<typeof Radio.Group>;

const BorderedStory = () => {
  const [value, setValue] = useState<string>();

  return <BorderedRadio value={value} options={['64Gb', '128Gb', '256Gb']} onChange={setValue} />;
};

export const Bordered: Story = {
  render: () => <BorderedStory />,
};

const CheckStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <p>Your favorite hobby</p>
      <Checked
        value={value}
        options={['Books', 'Movies', 'Music', 'Photo', 'Video Games']}
        onChange={setValue}
      />
    </>
  );
};

export const Check: Story = {
  render: () => <CheckStory />,
};

const GroupsStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <Group
      value={value}
      options={['Radio 1', 'Radio 2', 'Radio 3', 'Radio X']}
      onChange={setValue}
    />
  );
};

export const Groups: Story = {
  render: () => <GroupsStory />,
};

const SegmentStory = () => {
  const [value, setValue] = useState<string>();

  return <Segmented value={value} options={['Small', 'Medium', 'Large']} onChange={setValue} />;
};

export const Segment: Story = {
  render: () => <SegmentStory />,
};

const AlignmentRadioStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      {JSON.stringify(value)}
      <AlignmentRadio value={value} onChange={setValue} />
    </>
  );
};

export const Alignment: Story = {
  render: () => <AlignmentRadioStory />,
};

const TabStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <Tabs value={value} options={['One', 'Two', 'Three']} onChange={setValue} />
      {value === 'One' && <p>Tab One</p>}
      {value === 'Two' && <p>Tab Two</p>}
      {value === 'Three' && <p>Tab Three</p>}
    </>
  );
};

export const Tab: Story = {
  render: () => <TabStory />,
};
