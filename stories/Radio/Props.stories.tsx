import { useState, useEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Radio from '@2e32/react-radio';
import '@2e32/react-radio/css';

import type { NotificationType, INotification, NumOption } from './types';
import { log, renderCheckboxIcon, renderPathogenIcon } from './utils';

import './assets/css/props.css';

const meta: Meta<typeof Radio> = {
  title: 'Example/Radio/props',
  component: Radio,
  args: {
    children: 'Label',
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

const RefStory = () => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    log(ref.current);
  }, []);

  return (
    <>
      <p>See the console</p>
      <Radio ref={ref}>Label</Radio>
    </>
  );
};

export const Ref: Story = {
  name: 'ref',
  render: () => <RefStory />,
};

const CheckedStory = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((currentChecked) => !currentChecked);
  };

  return (
    <>
      <Radio checked={checked}>Label</Radio>
      <br />
      <br />
      <button onClick={handleClick}>Click to change checked state</button>
    </>
  );
};

export const Checked: Story = {
  name: 'checked',
  render: () => <CheckedStory />,
};

export const Children: Story = {
  name: 'children',
  render: () => (
    <>
      <Radio>To do</Radio>
      <Radio>In progress 🛠️</Radio>
      <Radio>
        <b>Done</b>
      </Radio>
    </>
  ),
};

export const Hint: Story = {
  name: 'hint',
  render: () => (
    <>
      <p>
        <code>hint</code> как строка
      </p>
      <Radio hint="Max 3 projects" checkmarkAlign="start">
        Free
      </Radio>
      <p>
        <code>hint</code> как React-элемент
      </p>
      <Radio
        hint={
          <>
            Unlimited projects <b>($20 per month)</b>
          </>
        }
        checkmarkAlign="start"
      >
        Pro
      </Radio>
    </>
  ),
};

const ValueStory = () => {
  const [notification, setNotification] = useState<INotification>({
    sms: true,
    email: false,
    push: false,
  });

  const handleChange = (selectedValue: NotificationType) => {
    setNotification((current) => {
      const reset = Object.keys(current).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {} as INotification
      );

      return { ...reset, [selectedValue]: true };
    });
  };

  return (
    <>
      <p>Notification: {JSON.stringify(notification)}</p>
      <Radio<NotificationType> checked={notification.sms} value="sms" onChange={handleChange}>
        SMS
      </Radio>
      <Radio<NotificationType> checked={notification.email} value="email" onChange={handleChange}>
        Email
      </Radio>
      <Radio<NotificationType> checked={notification.push} value="push" onChange={handleChange}>
        Push
      </Radio>
    </>
  );
};

export const Value: Story = {
  name: 'value',
  render: () => <ValueStory />,
};

export const ClassName: Story = {
  name: 'className',
  args: { children: 'Red text', className: 'color-red' },
};

export const Style: Story = {
  name: 'style',
  args: { children: 'Blue text', style: { color: 'blue' } },
};

export const BoxClassName: Story = {
  name: 'boxClassName',
  args: { boxClassName: 'mr-40' },
};

export const LabelClassName: Story = {
  name: 'labelClassName',
  args: { labelClassName: 'gradient-text' },
};

export const HintClassName: Story = {
  name: 'hintClassName',
  args: { hint: 'Hint', hintClassName: 'color-red' },
};

export const CheckmarkPosition: Story = {
  name: 'checkmarkPosition',
  render: () => (
    <div className="d-flex">
      <Radio checkmarkPosition="left">Left</Radio>
      <Radio checkmarkPosition="right">Right</Radio>
      <Radio checkmarkPosition="top">Top</Radio>
      <Radio checkmarkPosition="bottom">Bottom</Radio>
    </div>
  ),
};

export const CheckmarkAlign: Story = {
  name: 'checkmarkAlign',
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Radio checkmarkAlign="start">
        React is a JavaScript library for building user interfaces.
      </Radio>
      <hr />
      <Radio checkmarkAlign="center">
        Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the
        web.
      </Radio>
      <hr />
      <Radio checkmarkAlign="end">
        Angular is a development platform for building mobile and desktop web applications using
        TypeScript/JavaScript and other languages.
      </Radio>
    </div>
  ),
};

export const Disabled: Story = {
  name: 'disabled',
  render: () => (
    <>
      <Radio checked disabled>
        Checked
      </Radio>
      <br />
      <Radio disabled>Unchecked</Radio>
    </>
  ),
};

export const ReadOnly: Story = {
  name: 'readOnly',
  render: () => (
    <>
      <Radio checked readOnly>
        Checked
      </Radio>
      <br />
      <Radio readOnly>Unchecked</Radio>
    </>
  ),
};

export const AutoFocus: Story = {
  name: 'autoFocus',
  args: { autoFocus: true, onFocus: () => log('Focus') },
};

const loremIpsumText =
  // eslint-disable-next-line max-len
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const Block: Story = {
  name: 'block',
  args: { block: true },
  render: () => (
    <>
      <span>{loremIpsumText}</span>
      <Radio block>Radio block</Radio>
      <span>{loremIpsumText}</span>
    </>
  ),
};

const RenderIconStory = () => {
  const [sex, setSex] = useState<string>();
  const [pathogen, setPathogen] = useState<string>();

  return (
    <>
      <p>Sex</p>
      <Radio
        checked={sex === 'male'}
        value="male"
        renderIcon={renderCheckboxIcon}
        onChange={setSex}
      >
        Male
      </Radio>
      <Radio
        checked={sex === 'female'}
        value="female"
        renderIcon={renderCheckboxIcon}
        onChange={setSex}
      >
        Female
      </Radio>

      <p>Pathogen</p>
      {['Bacteria', 'Virus'].map((p) => (
        <Radio
          key={p}
          checked={p === pathogen}
          value={p}
          renderIcon={renderPathogenIcon}
          onChange={setPathogen}
        >
          {p}
        </Radio>
      ))}
    </>
  );
};

export const RenderIcon: Story = {
  name: 'renderIcon',
  render: () => <RenderIconStory />,
};

const OnChangeStory = () => {
  const [str, setStr] = useState<string>();
  const [num, setNum] = useState<number>();
  const [obj, setObj] = useState<NumOption>();

  const handleChange = (selected: NumOption) => {
    setObj({ ...selected });
  };

  return (
    <>
      <p>String: {str}</p>
      {['One', 'Two', 'Three'].map((s) => (
        <Radio key={s} checked={s === str} value={s} onChange={setStr}>
          {s}
        </Radio>
      ))}

      <p>Number: {num}</p>
      {[1, 2, 3].map((n) => (
        <Radio
          key={n}
          checked={n === num}
          value={n}
          onChange={(selectedNumber) => setNum(selectedNumber)}
        >
          {n}
        </Radio>
      ))}

      <p>Object: {JSON.stringify(obj)}</p>
      {[
        { num: 1, label: 'One' },
        { num: 2, label: 'Two' },
        { num: 3, label: 'Three' },
      ].map((o) => (
        <Radio key={o.num} checked={o.num === obj?.num} value={o} onChange={handleChange}>
          {`${o.label} (${o.num})`}
        </Radio>
      ))}
    </>
  );
};

export const OnChange: Story = {
  name: 'onChange',
  render: () => <OnChangeStory />,
};

export const OnFocus: Story = {
  name: 'onFocus',
  args: { onFocus: () => log('Focus') },
};

export const OnBlur: Story = {
  name: 'onBlur',
  args: { onBlur: () => log('Blur') },
};
