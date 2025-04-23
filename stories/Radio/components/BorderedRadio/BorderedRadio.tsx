import Radio, { type RadioProps } from '@2e32/react-radio';

import './styles.css';

type BorderedRadioProps<T> = Omit<RadioProps<T>, 'renderIcon'>;

// Стилизация состояний радиокнопки происходит с помощью CSS (псевдоклассы input и комбинатор "+")
const renderIcon = () => <span className="bordered-radio" />;

const BorderedRadio = <T,>(props: BorderedRadioProps<T>) => (
  <Radio<T> {...props} renderIcon={renderIcon} />
);

export default BorderedRadio;
