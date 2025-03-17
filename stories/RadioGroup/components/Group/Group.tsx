import { useCallback } from 'react';
import cn from 'classnames';

import Radio, { type RadioGroupProps, type RenderOptionProps } from '@2e32/react-radio';

import './styles.css';

const Group = ({ value, options, onChange }: RadioGroupProps<string, string>) => {
  const renderOption = useCallback(
    ({ option, optionProps }: RenderOptionProps<string>) => {
      const { selected } = optionProps;

      return (
        <label
          key={option}
          className={cn('group-list__item', {
            'group-list__item--checked': selected,
          })}
        >
          {option}
          <input
            checked={selected}
            type="radio"
            className="checked__item__input"
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
      className="group-list"
      renderOption={renderOption}
    />
  );
};

export default Group;
