import { useCallback } from 'react';
import cn from 'classnames';

import Radio, { type RadioGroupProps, type RenderOptionProps } from '@2e32/react-radio';

import './styles.css';

const OutlinedRadioGroup = ({ value, options, onChange }: RadioGroupProps<string, string>) => {
  const renderOption = useCallback(
    ({ option, optionProps }: RenderOptionProps<string>) => {
      const { selected } = optionProps;

      return (
        <label
          key={option}
          className={cn('outlined-radio-group__item', {
            'outlined-radio-group__item--checked': selected,
          })}
        >
          {option}
          <input
            checked={selected}
            type="radio"
            className="outlined-radio-group__input"
            onChange={(e) => onChange?.(option, e)}
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
      className="outlined-radio-group"
      renderOption={renderOption}
    />
  );
};

export default OutlinedRadioGroup;
