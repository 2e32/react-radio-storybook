import RadioGroup, { type RadioGroupProps } from '@2e32/react-radio-group';

import './styles.css';

type BorderedRadioProps = Omit<RadioProps, 'renderIcon'>;

// Стилизация состояний радиокнопки происходит с помощью CSS (псевдоклассы input и комбинатор "+")
const renderIcon = () => <span className="bordered-radio" />;

const BorderedRadio = (props: BorderedRadioProps) => (
  <RadioGroup {...props} renderIcon={renderIcon} />
);

export default BorderedRadio;
