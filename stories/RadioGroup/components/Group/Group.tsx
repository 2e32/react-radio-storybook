import cn from 'classnames';

import { RadioGroup } from '@2e32/react-radio';

import './styles.css';

const Group = ({ value, options, disabled = false, onChange, ...rest }: any) => {
  return (
    <RadioGroup
      value={value}
      options={options}
      className="group-list"
      renderOption={({ option, optionProps }) => {
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
              type="radio"
              checked={selected}
              className="checked__item__input"
              onChange={(e) => onChange(option, e)}
            />
          </label>
        );
      }}
    />
  );
};

export default Group;
