import { useCallback } from 'react';
import Radio, { type RadioGroupProps, type RenderOptionProps } from '@2e32/react-radio';

import { Check } from '../../../assets/icons/svg';

import './styles.css';

type CheckedRadioGroupProps = Pick<
  RadioGroupProps<string, string>,
  'value' | 'options' | 'onChange'
>;

const CheckedRadioGroup = ({ onChange, ...rest }: CheckedRadioGroupProps) => {
  const renderOption = useCallback(
    ({ option, optionProps }: RenderOptionProps<string>) => {
      const { selected } = optionProps;

      return (
        <label key={option} className="checked-item">
          <span className="checked-item__icon">{selected ? <Check fill="#1e88e5" /> : null}</span>
          <input
            checked={selected}
            type="radio"
            className="checked-item__input"
            onChange={(e) => onChange?.(option, e)}
          />
          {option}
        </label>
      );
    },
    [onChange]
  );

  return <Radio.Group {...rest} vertical renderOption={renderOption} />;
};

export default CheckedRadioGroup;
