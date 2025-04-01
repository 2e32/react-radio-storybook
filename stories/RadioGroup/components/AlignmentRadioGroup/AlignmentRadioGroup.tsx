import { useCallback } from 'react';
import cn from 'classnames';

import Radio, { type RenderOptionProps } from '@2e32/react-radio';

import type { AlignmentRadioGroupProps, AlignmentOption } from './types';
import { optionKey, compareValueAndOption } from './utils';

import { ReactComponent as AlignTop } from './format-vertical-align-top.svg';
import { ReactComponent as AlignCenter } from './format-vertical-align-center.svg';
import { ReactComponent as AlignBottom } from './format-vertical-align-bottom.svg';

import './styles.css';

const options: AlignmentOption[] = [
  { value: 'top', icon: AlignTop },
  { value: 'center', icon: AlignCenter },
  { value: 'bottom', icon: AlignBottom },
];

const AlignmentRadioGroup = ({ value, onChange }: AlignmentRadioGroupProps) => {
  const renderOption = useCallback(
    ({ option, optionProps }: RenderOptionProps<AlignmentOption>) => {
      const { value, icon: Icon } = option;
      const { key, selected, disabled } = optionProps;

      return (
        <label
          key={key}
          className={cn('alignment-radio-group__item', {
            'alignment-radio-group__item--checked': selected,
          })}
        >
          <Icon fill="currentColor" />
          <input
            value={value}
            checked={selected}
            disabled={disabled}
            type="radio"
            className="alignment-radio-group__input"
            onChange={(e) => onChange?.(value, e)}
          />
        </label>
      );
    },
    [onChange]
  );

  return (
    <Radio.Group
      value={value}
      options={options}
      className="alignment-radio-group"
      optionKey={optionKey}
      isValueEqualOption={compareValueAndOption}
      renderOption={renderOption}
    />
  );
};

export default AlignmentRadioGroup;
