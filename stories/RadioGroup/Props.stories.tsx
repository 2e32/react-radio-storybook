import { useState, useEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Radio, { type RenderIconProps } from '@2e32/react-radio';

import { log } from '../utils';

import * as options from './options';
import type { Fruit, Currency } from './types';
import {
  renderLangOption,
  renderSubjectOption,
  renderColorOption,
  optionLangDisabled,
} from './utils';

import * as Icon from '../assets/icons/svg';

const meta: Meta<typeof Radio.Group> = {
  title: 'Example/RadioGroup/props',
  component: Radio.Group,
};

export default meta;

type Story = StoryObj<typeof Radio.Group>;

const RefStory = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    log(ref.current);
  }, []);

  return <Radio.Group ref={ref} options={options.cities} />;
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
      <Radio.Group value={null} options={options.cities} />
      <Radio.Group value={undefined} options={options.cities} />

      <p>
        <code>value</code> - строка.
      </p>
      <Radio.Group value="London" options={options.cities} />

      <p>
        <code>value</code> - число.
      </p>
      <Radio.Group value={25} options={options.itemsPerPage} />

      <p>
        <code>value</code> - объект.
      </p>
      <Radio.Group
        value={{ bookId: 3, authorId: 30, title: 'Crime and Punishment', year: 1866 }}
        options={options.books}
        isValueEqualOption={(value, option) => value?.bookId === option.bookId}
        optionContent="title"
      />
    </>
  ),
};

export const Label: Story = {
  name: 'label',
  render: () => (
    <>
      <p>
        <code>label</code> как строка
      </p>
      <Radio.Group label="Label" options={['Radio 1', 'Radio 2']} />

      <p>
        <code>label</code> как React-элемент
      </p>
      <Radio.Group
        label={
          <span>
            Select your <b>web browser</b>
          </span>
        }
        options={options.browsers}
      />
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
      <Radio.Group hint="Hint" options={['Radio 1', 'Radio 2']} />

      <p>
        <code>hint</code> как React-элемент
      </p>
      <Radio.Group
        hint={
          <span>
            Select a <b>product size</b>
          </span>
        }
        options={options.sizes}
      />
    </>
  ),
};

export const Options: Story = {
  name: 'options',
  render: () => (
    <>
      <p>
        <code>options</code> - массив строк.
      </p>
      <Radio.Group options={options.cities} />

      <p>
        <code>options</code> - массив чисел.
      </p>
      <Radio.Group options={options.itemsPerPage} />

      <p>
        <code>options</code> - массив объектов.
      </p>
      <Radio.Group options={options.countries} optionContent="text" />
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
      <Radio.Group options={options.cities} />

      <p>
        <code>optionKey</code> не указан. Т.к. ключ не указан и значение опции - это объект, то
        индекс опции в списке используется в качестве ключа.
      </p>
      <Radio.Group options={options.songs} optionContent="song" />

      <p>
        <code>optionKey</code> - строка, указывающая имя свойства в объекте, которое необходимо
        использовать в качестве ключа.
      </p>
      <Radio.Group options={options.books} optionKey="bookId" optionContent="title" />

      <p>
        <code>optionKey</code> - функция вычисления ключа.
      </p>
      <Radio.Group options={options.pets} optionKey={(option, index) => `${index}-${option}`} />
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
      <Radio.Group options={options.sizes} />

      <p>
        <code>optionContent</code> - строка, указывающая имя свойства в объекте, которое необходимо
        отобразить.
      </p>
      <Radio.Group options={options.fruits} optionContent="name" />

      <p>
        <code>optionContent</code> - функция отображения значения.
      </p>
      <Radio.Group options={options.currencies} optionContent={(option) => option.code} />
      <Radio.Group options={options.schoolSubjects} optionContent={renderSubjectOption} />
      <Radio.Group options={options.colors} optionContent={renderColorOption} />
    </>
  ),
};

export const OptionDisabled: Story = {
  name: 'optionDisabled',
  render: () => (
    <Radio.Group
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
      <p>
        Без <code>isValueEqualOption</code>. Радиогруппа корректно отображает выбранное значение,
        только если значение и опция имеют одинаковую ссылку (по умолчанию используется сравнение по
        ссылке).
      </p>
      <Radio.Group
        value={currency}
        options={options.currencies}
        optionKey="code"
        optionContent="label"
        onChange={(selectedCurrency) => {
          // Записываем в состояние оригинальную опцию, ссылка сохраняется
          setCurrency(selectedCurrency);
        }}
      />

      <p>
        С <code>isValueEqualOption</code>. Радиогруппа всегда корректно отображает выбранное
        значение, т.к. функция обеспечивает сравнение ключей (идентификаторов) в виде примитивных
        значений.
      </p>
      <Radio.Group
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

export const ClassName: Story = {
  name: 'className',
  args: { value: 'Firefox', options: options.browsers, className: 'color-red' },
};

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
      <Radio.Group disabled />
      <p>
        Select с <code>placeholder</code>.
      </p>
      <Radio.Group disabled />
      <p>
        Select с <code>value</code>.
      </p>
      <Radio.Group value="Berlin" disabled />
      <p>
        Select с <code>open</code>. Это свойство игнорируется и выпадающие опции скрыты.
      </p>
      <Radio.Group value="Berlin" options={options.cities} disabled />
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
      <Radio.Group readOnly />
      <p>
        Select с <code>placeholder</code>.
      </p>
      <Radio.Group readOnly />
      <p>
        Select с <code>value</code>.
      </p>
      <Radio.Group value="Berlin" readOnly />
      <p>
        Select с <code>open</code>. Это свойство игнорируется и выпадающие опции скрыты.
      </p>
      <Radio.Group value="Berlin" options={options.cities} readOnly />
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

const renderSexIcon = <T,>({ checked, disabled, readOnly }: RenderIconProps<T>) => {
  const CheckIcon = checked ? Icon.CheckboxMarked : Icon.CheckboxBlank;

  return <CheckIcon fill={getColor(disabled, readOnly)} />;
};

const renderLangIcon = ({ value }: RenderIconProps<string>) => {
  const LangIcon = value === 'js' ? Icon.LanguageJavascript : Icon.LanguageTypescript;

  // Используются стандартные цвета для checked/unchecked состояния
  return <LangIcon fill="currentColor" width="48" height="48" />;
};

const renderFoodIcon = ({ value, checked }: RenderIconProps<string>) => {
  let FoodIcon;

  if (value === 'noodles') FoodIcon = Icon.Noodles;
  else if (value === 'rice') FoodIcon = Icon.Rice;
  else FoodIcon = Icon.Pasta;

  // Переопределение цвета для checked/unchecked состояния
  return <FoodIcon fill={checked ? '#455a64' : '#b0bec5'} width="48" height="48" />;
};

const RenderIconStory = () => {
  const [sex, setSex] = useState<string>();
  const [lang, setLang] = useState<string>();
  const [food, setFood] = useState<string>();

  return (
    <>
      <p>Sex</p>
      <Radio.Group
        value={sex}
        options={['male', 'female']}
        renderIcon={renderSexIcon}
        onChange={setSex}
      />

      <p>Lang</p>
      <Radio.Group
        value={lang}
        options={['js', 'ts']}
        renderIcon={renderLangIcon}
        onChange={setLang}
      />

      <p>Food</p>
      <Radio.Group
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
      <Radio.Group value={str} options={strOptions} onChange={setStr} />
      <p>Value: {num}</p>
      <Radio.Group
        value={num}
        options={numOptions}
        onChange={(selectedNum) => setNum(selectedNum)}
      />
      <p>Value: {JSON.stringify(fruit)}</p>
      <Radio.Group
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
