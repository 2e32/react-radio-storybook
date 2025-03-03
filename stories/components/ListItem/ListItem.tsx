import cn from 'classnames';
import Radio, { type RadioProps } from '@2e32/react-radio';

import './styles.css';

interface ListItemProps<T> extends RadioProps<T> {
  icon: React.ReactNode;
}

const ListItem = <T,>({ children, icon, checked, disabled, ...rest }: ListItemProps<T>) => (
  <li
    className={cn('list-item', {
      'list-item--checked': checked,
      'list-item--disabled': disabled,
    })}
  >
    <span className="list-item__icon">{icon}</span>
    <span className="list-item__label">{children}</span>
    <span className="list-item__radio">
      {!disabled && <Radio<T> {...rest} checked={checked} />}
    </span>
  </li>
);

export default ListItem;
