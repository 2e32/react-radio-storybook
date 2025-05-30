import { useCallback } from 'react';
import cn from 'classnames';

import Radio, { type RadioGroupProps, type RenderOptionProps } from '@2e32/react-radio';

import './styles.css';

type OutlinedRadioGroupProps = Omit<RadioGroupProps<string, string>, 'className' | 'renderIcon'>;

const OutlinedRadioGroup = ({ onChange, ...rest }: OutlinedRadioGroupProps) => {
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

  return <Radio.Group {...rest} className="outlined-radio-group" renderOption={renderOption} />;
};

export default OutlinedRadioGroup;
