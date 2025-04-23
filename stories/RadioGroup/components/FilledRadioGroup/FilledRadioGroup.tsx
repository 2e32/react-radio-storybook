import { useCallback } from 'react';
import cn from 'classnames';

import Radio, { type RadioGroupProps, type RenderOptionProps } from '@2e32/react-radio';

import './styles.css';

type FilledRadioGroupProps = Omit<RadioGroupProps<string, string>, 'className' | 'renderIcon'>;

const FilledRadioGroup = ({ onChange, ...rest }: FilledRadioGroupProps) => {
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

  return <Radio.Group {...rest} className="filled-radio-group" renderOption={renderOption} />;
};

export default FilledRadioGroup;
