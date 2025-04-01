import { useCallback } from 'react';
import cn from 'classnames';

import Radio, { type RadioGroupProps, type RenderOptionProps } from '@2e32/react-radio';

import './styles.css';

const FilledRadioGroup = ({ value, options = [], onChange }: RadioGroupProps<string, string>) => {
  const renderOption = useCallback(
    ({ option, optionProps }: RenderOptionProps<string>) => {
      const { selected } = optionProps;

      return (
        <label
          key={option}
          className={cn('filled-radio-group__item', {
            'filled-radio-group__item--checked': selected,
          })}
        >
          <input
            type="radio"
            checked={selected}
            className="filled-radio-group__input"
            onChange={(e) => onChange?.(option, e)}
          />
          {option}
        </label>
      );
    },
    [onChange]
  );

  return (
    <Radio.Group
      value={value}
      options={options}
      className="filled-radio-group"
      renderOption={renderOption}
    />
  );
};

export default FilledRadioGroup;
