import cn from 'classnames';
import Radio, { type RadioProps, type RenderIconProps } from '@2e32/react-radio';

import Icon from './Icon';

import './styles.css';

type OutlinedRadioProps<T> = Omit<RadioProps<T>, 'renderIcon'>;

const renderIcon = <T,>({ checked }: RenderIconProps<T>) => (
  <Icon className={cn('outlined-radio', { 'outlined-radio--selected': checked })} />
);

const OutlinedRadio = <T,>(props: OutlinedRadioProps<T>) => (
  <Radio<T> {...props} renderIcon={renderIcon} />
);

export default OutlinedRadio;
