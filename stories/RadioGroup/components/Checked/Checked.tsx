import Radio, { RadioProps } from '@2e32/react-radio';

import { Check } from '../../../assets/icons/svg';

import './styles.css';

type YesNoRadioProps = Pick<RadioProps, 'value' | 'onChange'>;

const Checked = ({ value, options, onChange }: YesNoRadioProps) => (
  <Radio.Group
    value={value}
    options={options}
    className="yes-no-radio"
    renderOption={({ option, optionProps }: { option: T; optionProps: { selected: boolean } }) => {
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
    }}
  />
);

export default Checked;
