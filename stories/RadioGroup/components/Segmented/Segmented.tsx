import cn from 'classnames';

import Radio from '@2e32/react-radio';

import './styles.css';

const Segmented = ({ value, options = [], onChange, ...rest }: any) => {
  return (
    <Radio.Group
      value={value}
      options={options}
      className="segmented-list"
      renderOption={({ option, optionProps }) => {
        const { selected } = optionProps;

        return (
          <label
            key={option}
            className={cn('segmented-list__item', {
              'segmented-list__item--checked': selected,
            })}
          >
            <input
              type="radio"
              checked={selected}
              className="segmented-list__input"
              onChange={(e) => onChange(option, e)}
            />
            {option}
          </label>
        );
      }}
    />
  );
};

export default Segmented;
