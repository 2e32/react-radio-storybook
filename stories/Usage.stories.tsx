import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Radio from '@2e32/react-radio';

import {
  BorderedRadio,
  CheckedRadio,
  ColoredRadio,
  FilledRadio,
  FilledRadioGroup,
  IconRadio,
  ListItem,
  OutlinedRadio,
  OutlinedRadioGroup,
  TiledRadio,
} from './components';
import * as Icon from './assets/icons/svg';

import './assets/css/usage.css';

const meta = {
  title: 'Example/Radio/usage',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

const OutlinedStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <OutlinedRadio checked={value === 'a'} value="a" onChange={setValue}>
        A
      </OutlinedRadio>
      <OutlinedRadio checked={value === 'b'} value="b" onChange={setValue}>
        B
      </OutlinedRadio>
    </>
  );
};

export const Outlined: Story = {
  render: () => <OutlinedStory />,
};

const BorderedStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <BorderedRadio checked={value === 'a'} value="a" onChange={setValue}>
        A
      </BorderedRadio>
      <BorderedRadio checked={value === 'b'} value="b" onChange={setValue}>
        B
      </BorderedRadio>
      <BorderedRadio checked={value === 'c'} value="c" onChange={setValue}>
        C
      </BorderedRadio>
      <BorderedRadio checked={value === 'd'} value="d" disabled onChange={setValue}>
        D
      </BorderedRadio>
    </>
  );
};

export const Bordered: Story = {
  render: () => <BorderedStory />,
};

const FilledStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <FilledRadio checked={value === 'a'} value="a" onChange={setValue}>
        A
      </FilledRadio>
      <FilledRadio checked={value === 'b'} value="b" onChange={setValue}>
        B
      </FilledRadio>
    </>
  );
};

export const Filled: Story = {
  render: () => <FilledStory />,
};

const ColoredStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <ColoredRadio checked={value === 'default'} value="default" onChange={setValue}>
        Default
      </ColoredRadio>
      <ColoredRadio checked={value === 'red'} value="red" color="red" onChange={setValue}>
        Red
      </ColoredRadio>
      <ColoredRadio checked={value === 'orange'} value="orange" color="orange" onChange={setValue}>
        Orange
      </ColoredRadio>
      <ColoredRadio checked={value === 'green'} value="green" color="green" onChange={setValue}>
        Green
      </ColoredRadio>
      <ColoredRadio checked={value === 'purple'} value="purple" color="purple" onChange={setValue}>
        Purple
      </ColoredRadio>
    </>
  );
};

export const Colored: Story = {
  render: () => <ColoredStory />,
};

const CheckedStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <CheckedRadio checked={value === 'yes'} value="yes" onChange={setValue}>
        Yes
      </CheckedRadio>
      <br />
      <CheckedRadio checked={value === 'no'} value="no" onChange={setValue}>
        No
      </CheckedRadio>
    </>
  );
};

export const Checked: Story = {
  render: () => <CheckedStory />,
};

const IconsStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <IconRadio icon={<Icon.Train />} disabled />
      <IconRadio checked={value === 'bus'} value="bus" icon={<Icon.Bus />} onChange={setValue} />
      <IconRadio checked={value === 'car'} value="car" icon={<Icon.Car />} onChange={setValue} />
      <IconRadio checked={value === 'bike'} value="bike" icon={<Icon.Bike />} onChange={setValue} />
      <IconRadio checked={value === 'walk'} value="walk" icon={<Icon.Walk />} onChange={setValue} />
    </>
  );
};

export const Icons: Story = {
  render: () => <IconsStory />,
};

const tiledIconProps = { width: 48, height: 48, fill: 'currentColor' };

const TiledStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <TiledRadio
        checked={value === 'react'}
        value="react"
        label="React"
        icon={<Icon.React {...tiledIconProps} />}
        onChange={setValue}
      />
      <TiledRadio
        checked={value === 'vue'}
        value="vue"
        label="Vue"
        icon={<Icon.Vue {...tiledIconProps} />}
        onChange={setValue}
      />
      <TiledRadio
        checked={value === 'angular'}
        value="angular"
        label="Angular"
        icon={<Icon.Angular {...tiledIconProps} />}
        onChange={setValue}
      />
    </>
  );
};

export const Tiled: Story = {
  render: () => <TiledStory />,
};

const ListStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <ul className="list">
      <ListItem
        checked={value === 'high'}
        value="high"
        icon={<Icon.VolumeHigh />}
        onChange={setValue}
      >
        High
      </ListItem>
      <ListItem
        checked={value === 'medium'}
        value="medium"
        icon={<Icon.VolumeMedium />}
        onChange={setValue}
      >
        Medium
      </ListItem>
      <ListItem
        checked={value === 'mute'}
        value="mute"
        icon={<Icon.VolumeMute />}
        disabled
        onChange={setValue}
      >
        Mute
      </ListItem>
    </ul>
  );
};

export const List: Story = {
  render: () => <ListStory />,
};

const OutlinedGroupStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <OutlinedRadioGroup
      value={value}
      options={['Radio 1', 'Radio 2', 'Radio 3', 'Radio 4', 'Radio 5']}
      onChange={setValue}
    />
  );
};

export const OutlinedGroup: Story = {
  render: () => <OutlinedGroupStory />,
};

const FilledGroupStory = () => {
  const [value, setValue] = useState<string>();

  return (
    <FilledRadioGroup value={value} options={['Small', 'Medium', 'Large']} onChange={setValue} />
  );
};

export const FilledGroup: Story = {
  render: () => <FilledGroupStory />,
};
