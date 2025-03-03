import { useCallback } from 'react';
import cn from 'classnames';
import Radio, { type RadioProps, type RenderIconProps } from '@2e32/react-radio';

import './styles.css';

interface IconRadioProps<T> extends Omit<RadioProps<T>, 'boxClassName' | 'renderIcon'> {
  icon: React.ReactNode;
}

const IconRadio = <T,>({ icon, ...rest }: IconRadioProps<T>) => {
  const renderIcon = useCallback(
    <T,>({ checked, disabled }: RenderIconProps<T>) => (
      <span
        className={cn('icon-radio', {
          'icon-radio--checked': checked,
          'icon-radio--disabled': disabled,
        })}
      >
        {icon}
      </span>
    ),
    [icon]
  );

  return <Radio<T> {...rest} boxClassName="mr-0" renderIcon={renderIcon} />;
};

export default IconRadio;
