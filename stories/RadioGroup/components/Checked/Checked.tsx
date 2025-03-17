import { useCallback } from 'react';
import Radio, { type RadioGroupProps, type RenderOptionProps } from '@2e32/react-radio';

import { Check } from '../../../assets/icons/svg';

import './styles.css';

type CheckedProps = Pick<RadioGroupProps<string, string>, 'value' | 'options' | 'onChange'>;

const Checked = ({ value, options, onChange }: CheckedProps) => {
  const renderOption = useCallback(
    ({ option, optionProps }: RenderOptionProps<string>) => {
      const { selected } = optionProps;

      return (
        <label key={option} className="checked__item">
          <span className="checked__item__box">{selected ? <Check fill="#1e88e5" /> : null}</span>
          <input
            type="radio"
            checked={selected}
            className="checked__item__input"
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
      className="yes-no-radio"
      renderOption={renderOption}
    />
  );
};

export default Checked;
