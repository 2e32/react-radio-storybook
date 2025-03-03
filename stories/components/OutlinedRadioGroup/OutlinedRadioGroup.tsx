import { useMemo } from 'react';
import cn from 'classnames';
import Radio from '@2e32/react-radio';

import './styles.css';

interface OutlinedRadioGroupProps {
  value?: string;
  options: string[];
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const renderIcon = () => null; // Скрываем иконку

const OutlinedRadioGroup = ({ value, options, onChange }: OutlinedRadioGroupProps) => {
  const renderedOptions = useMemo(
    () =>
      options.map((option) => {
        const selected = option === value;

        return (
          <li
            key={option}
            className={cn('outlined-group__item', {
              'outlined-group__item--checked': selected,
            })}
          >
            {option}
            <Radio checked={selected} value={option} renderIcon={renderIcon} onChange={onChange} />
          </li>
        );
      }),
    [value, options, onChange]
  );

  return <ul className="outlined-group">{renderedOptions}</ul>;
};

export default OutlinedRadioGroup;
