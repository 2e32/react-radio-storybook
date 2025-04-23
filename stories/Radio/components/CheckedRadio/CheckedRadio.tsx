import Radio, { type RadioProps, type RenderIconProps } from '@2e32/react-radio';

import { Check } from '../../../assets/icons/svg';

import './styles.css';

type CheckedRadioProps<T> = Omit<RadioProps<T>, 'renderIcon'>;

const renderIcon = <T,>({ checked }: RenderIconProps<T>) => (
  <span className="checked-radio">{checked ? <Check /> : null}</span>
);

const CheckedRadio = <T,>(props: CheckedRadioProps<T>) => (
  <Radio<T> {...props} renderIcon={renderIcon} />
);

export default CheckedRadio;
