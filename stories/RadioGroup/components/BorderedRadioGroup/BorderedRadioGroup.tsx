import Radio, { type RadioGroupProps } from '@2e32/react-radio';

import './styles.css';

type BorderedRadioGroupProps<V, O> = Omit<RadioGroupProps<V, O>, 'renderIcon'>;

// Стилизация состояний радиокнопки происходит с помощью CSS (псевдоклассы input и комбинатор "+")
const renderIcon = () => <span className="bordered-radio" />;

const BorderedRadioGroup = <V, O>(props: BorderedRadioGroupProps<V, O>) => (
  <Radio.Group {...props} renderIcon={renderIcon} />
);

export default BorderedRadioGroup;
