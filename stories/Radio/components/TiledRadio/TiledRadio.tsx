import Radio, { type RadioProps } from '@2e32/react-radio';

import './styles.css';

interface TileProps {
  label: string;
  icon: JSX.Element;
}

type TiledRadioProps<T> = Omit<RadioProps<T>, 'children' | 'className' | 'tabIndex'> & TileProps;

const Tile = ({ label, icon }: TileProps) => (
  <div className="tile" tabIndex={0}>
    <span className="tile__check" />
    <span className="tile__icon">{icon}</span>
    <span className="tile__label">{label}</span>
  </div>
);

const TiledRadio = <T,>({ label, icon, ...rest }: TiledRadioProps<T>) => (
  <Radio {...rest} className="tiled-radio" tabIndex={-1}>
    <Tile label={label} icon={icon} />
  </Radio>
);

export default TiledRadio;
