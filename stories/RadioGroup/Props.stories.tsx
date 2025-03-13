import React, { useState, useEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

//import Radio, { type RenderIconProps } from '@2e32/react-radio-group';
//import '@2e32/react-radio-group/css';

import RadioGroup from '../../RadioGroup';

import * as options from './options';

import type { Fruit } from './types';
import {
  renderLangOption,
  renderSubjectOption,
  renderColorOption,
  optionLangDisabled,
} from './utils';

import * as Icon from '../assets/icons/svg';

const meta: Meta<typeof RadioGroup> = {
  title: 'Example/RadioGroup/props',
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

// value + checked
// value + checkedValue + isValueChecked
// value + name

const RefStory = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    alert(`RadioGroup text: "${ref.current?.textContent}"`);
  }, []);

  return <RadioGroup ref={ref} options={options.cities} />;
};

export const Ref: Story = {
  name: 'ref',
  render: () => <RefStory />,
};

export const Value: Story = {
  name: 'value',
  render: () => (
    <>
      <p>
        <code>value</code> - отсутствует (nullable).
      </p>
      <RadioGroup value={null} options={options.cities} />
      <RadioGroup value={undefined} options={options.cities} />

      <p>
        <code>value</code> - строка.
      </p>
      <RadioGroup value="Paris" options={options.cities} />

      <p>
        <code>value</code> - число.
      </p>
      <RadioGroup value={10} options={options.itemsPerPage} />

      <p>
        <code>value</code> - объект.
      </p>
      <RadioGroup
        value={{ bookId: 5, title: 'Don Quixote', year: 1605, authorId: 4 }}
        options={options.books}
        isValueEqualOption={(value, option) => value?.bookId === option.bookId}
        optionContent="title"
      />
    </>
  ),
};

export const Label: Story = {
  name: 'label',
  args: { label: 'Label', options: options.browsers },
};

export const Hint: Story = {
  name: 'hint',
  args: { hint: 'Hint', options: options.browsers },
};

export const Options: Story = {
  name: 'options',
  render: () => (
    <>
      <p>
        <code>options</code> - массив строк.
      </p>
      <RadioGroup options={options.cities} />

      <p>
        <code>options</code> - массив чисел.
      </p>
      <RadioGroup options={options.itemsPerPage} />

      <p>
        <code>options</code> - массив объектов.
      </p>
      <RadioGroup options={options.countries} optionContent="text" />

      <p>
        <code>options</code> - массив объектов.
      </p>
      <RadioGroup options={options.countries} optionContent={({ value }) => value} />
    </>
  ),
};

export const OptionKey: Story = {
  name: 'optionKey',
  render: () => (
    <>
      <p>
        <code>optionKey</code> не указан. Т.к. ключ не указан и значение опции примитивное (строка
        или число), то оно используется в качестве ключа.
      </p>
      <RadioGroup options={options.cities} />

      <p>
        <code>optionKey</code> не указан. Т.к. ключ не указан и значение опции - это объект, то
        индекс опции в списке используется в качестве ключа.
      </p>
      <RadioGroup options={options.songs} optionContent="song" />

      <p>
        <code>optionKey</code> - строка, указывающая имя свойства в объекте, которое необходимо
        использовать в качестве ключа.
      </p>
      <RadioGroup options={options.books} optionKey="bookId" optionContent="title" />

      <p>
        <code>optionKey</code> - функция вычисления ключа.
      </p>
      <RadioGroup options={options.pets} optionKey={(option, index) => `${option}${index}`} />
    </>
  ),
};

export const OptionContent: Story = {
  name: 'optionContent',
  render: () => (
    <>
      <p>
        <code>optionContent</code> не указан. Отображается значение опции.
      </p>
      <RadioGroup options={options.sizes} />

      <p>
        <code>optionContent</code> - строка, указывающая имя свойства в объекте, которое необходимо
        отобразить.
      </p>
      <RadioGroup options={options.fruits} optionContent="name" />

      <p>
        <code>optionContent</code> - функция отображения значения.
      </p>
      <RadioGroup options={options.schoolSubjects} optionContent={renderSubjectOption} />
      <RadioGroup options={options.colors} optionContent={renderColorOption} />
    </>
  ),
};

export const OptionDisabled: Story = {
  name: 'optionDisabled',
  render: () => (
    <RadioGroup
      options={options.programmingLanguages}
      optionContent={renderLangOption}
      optionDisabled={optionLangDisabled}
    />
  ),
};

const IsValueEqualOptionStory = () => {
  const [currency, setCurrency] = useState<Currency>();

  return (
    <>
      <RadioGroup
        value={currency}
        options={options.currencies}
        optionKey="code"
        optionContent="label"
        onChange={(selectedCurrency) => {
          // Записываем в состояние оригинальную опцию, ссылка сохраняется
          setCurrency(selectedCurrency);
        }}
      />

      <RadioGroup
        value={currency}
        options={options.currencies}
        optionKey="code"
        optionContent="label"
        isValueEqualOption={(value, option) => value?.code === option.code}
        onChange={(selectedCurrency) => {
          // Записываем в состояние копию, ссылка не сохраняется
          setCurrency({ ...selectedCurrency });
        }}
      />
    </>
  );
};

export const IsValueEqualOption: Story = {
  name: 'isValueEqualOption',
  render: () => <IsValueEqualOptionStory />,
};
/*
export const ClassName: Story = {
  name: 'className',
  args: { defaultValue: 'Red text', className: 'color-red' },
};
*/
export const ClassName: Story = {
  name: 'className',
  args: { value: 'Firefox', options: options.browsers, className: 'color-red' },
};
/*
export const Style: Story = {
  name: 'style',
  args: { style: { color: 'blue' }, defaultValue: 'Blue text' },
};
*/
export const Style: Story = {
  name: 'style',
  args: { options: options.browsers, style: { color: 'red' } },
};

export const LabelClassName: Story = {
  name: 'labelClassName',
  args: { options: options.browsers, label: 'Label', labelClassName: 'color-red' },
};

export const HintClassName: Story = {
  name: 'hintClassName',
  args: { options: options.browsers, hint: 'Hint', hintClassName: 'color-red' },
};

export const Disabled: Story = {
  name: 'disabled',
  render: () => (
    <>
      <p>
        Select без <code>value</code>.
      </p>
      <RadioGroup disabled />
      <p>
        Select с <code>placeholder</code>.
      </p>
      <RadioGroup disabled />
      <p>
        Select с <code>value</code>.
      </p>
      <RadioGroup value="Berlin" disabled />
      <p>
        Select с <code>open</code>. Это свойство игнорируется и выпадающие опции скрыты.
      </p>
      <RadioGroup value="Berlin" options={options.cities} disabled />
    </>
  ),
};

export const ReadOnly: Story = {
  name: 'readOnly',
  render: () => (
    <>
      <p>
        Select без <code>value</code>.
      </p>
      <RadioGroup readOnly />
      <p>
        Select с <code>placeholder</code>.
      </p>
      <RadioGroup readOnly />
      <p>
        Select с <code>value</code>.
      </p>
      <RadioGroup value="Berlin" readOnly />
      <p>
        Select с <code>open</code>. Это свойство игнорируется и выпадающие опции скрыты.
      </p>
      <RadioGroup value="Berlin" options={options.cities} readOnly />
    </>
  ),
};

export const Block: Story = {
  name: 'block',
  args: { block: true },
};

const getColor = (disabled: boolean, readOnly: boolean) => {
  if (disabled) return '#bdbdbd';
  if (readOnly) return '#ffab91';

  return '#f24e23';
};

const renderSexIcon = ({ checked, disabled, readOnly }: RenderIconProps) => {
  const CheckIcon = checked ? Icon.CheckboxMarked : Icon.CheckboxBlank;

  return <CheckIcon fill={getColor(disabled, readOnly)} />;
};
/*
function capitalizeFirstLetter(string) {
  return string.replace(/^./, string[0].toUpperCase());
}
*/

const renderLangIcon = ({ value }: RenderIconProps) => {
  let LangIcon;

  if (value === 'js') LangIcon = Icon.LanguageJavascript;
  if (value === 'ts') LangIcon = Icon.LanguageTypescript;

  // Используются стандартные цвета для checked/unchecked состояния
  return <LangIcon fill="currentColor" width="48" height="48" />;
};

const renderFoodIcon = ({ value, checked }: RenderIconProps) => {
  let FoodIcon;

  if (value === 'noodles') FoodIcon = Icon.Noodles;
  if (value === 'rice') FoodIcon = Icon.Rice;
  if (value === 'pasta') FoodIcon = Icon.Pasta;

  // Переопределение цвета для checked/unchecked состояния
  return <FoodIcon fill={checked ? '#455a64' : '#b0bec5'} width="48" height="48" />;
};

const RenderIconStory = () => {
  const [sex, setSex] = useState<string>();
  const [food, setFood] = useState<string>();
  const [lang, setLang] = useState<string>();

  return (
    <>
      <p>Sex</p>
      <RadioGroup
        value={sex}
        options={['male', 'female']}
        renderIcon={renderSexIcon}
        //optionContent={(str) => str.()}
        // optionContent={(str) => <div style={{ textTransform: 'capitalize' }}>{str}</div>}
        onChange={setSex}
      />

      <p>Lang</p>
      <RadioGroup
        value={lang}
        options={['js', 'ts']}
        renderIcon={renderLangIcon}
        onChange={setLang}
      />

      <p>Food</p>
      <RadioGroup
        value={food}
        options={['rice', 'noodles', 'pasta']}
        renderIcon={renderFoodIcon}
        onChange={setFood}
      />
    </>
  );
};

export const RenderIcon: Story = {
  name: 'renderIcon',
  render: () => <RenderIconStory />,
};

const strOptions = ['One', 'Two', 'Three'];
const numOptions = [1, 2, 3];

const isFruitSelected = (value: Fruit | null | undefined, option: Fruit) => value?.id === option.id;

const OnChangeStory = () => {
  const [str, setStr] = useState<string>();
  const [num, setNum] = useState<number>();
  const [fruit, setFruit] = useState<Fruit>();

  const handleChange = (selectedFruit: Fruit) => {
    setFruit({ ...selectedFruit });
  };

  return (
    <>
      <p>Value: {str}</p>
      <RadioGroup value={str} options={strOptions} onChange={setStr} />
      <p>Value: {num}</p>
      <RadioGroup
        value={num}
        options={numOptions}
        onChange={(selectedNum) => setNum(selectedNum)}
      />
      <p>Value: {JSON.stringify(fruit)}</p>
      <RadioGroup
        value={fruit}
        options={options.fruits}
        optionContent="name"
        isValueEqualOption={isFruitSelected}
        onChange={handleChange}
      />
    </>
  );
};

export const OnChange: Story = {
  name: 'onChange',
  render: () => <OnChangeStory />,
};
