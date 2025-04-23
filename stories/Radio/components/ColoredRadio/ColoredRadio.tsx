import Radio, { type RadioProps } from '@2e32/react-radio';

import './styles.css';

interface ColoredRadioProps<T> extends Omit<RadioProps<T>, 'boxClassName'> {
  color?: 'red' | 'orange' | 'green' | 'purple';
}

const ColoredRadio = <T,>({ color, ...rest }: ColoredRadioProps<T>) => (
  <Radio {...rest} boxClassName={color && `e-radio__box--${color}`} />
);

export default ColoredRadio;
