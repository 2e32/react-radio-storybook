import Radio, { type RadioProps } from '@2e32/react-radio';

import './styles.css';

type FilledRadioProps<T> = Omit<RadioProps<T>, 'tabIndex' | 'renderIcon'>;

// Радиокнопка поверх input. Это упрощает стилизацию, но усложняет испускание события onChange
const renderIcon = () => (
  <span
    className="filled-radio"
    tabIndex={0}
    onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
      const inputElement = e.currentTarget.previousElementSibling;

      // Программно щелкаем по input, чтобы вызывать событие onChange
      if (inputElement instanceof HTMLInputElement) inputElement.click();
    }}
  />
);

const FilledRadio = <T,>(props: FilledRadioProps<T>) => {
  return <Radio {...props} tabIndex={-1} renderIcon={renderIcon} />;
};

export default FilledRadio;
