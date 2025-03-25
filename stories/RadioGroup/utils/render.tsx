import { type RenderIconProps } from '@2e32/react-radio';

import * as Icon from '../../assets/icons/svg';

export const renderLangIcon = ({ value }: RenderIconProps<string>) => {
  const LangIcon = value === 'js' ? Icon.LanguageJavascript : Icon.LanguageTypescript;

  // Используются стандартные цвета для checked/unchecked состояния
  return <LangIcon fill="currentColor" width="48" height="48" />;
};

export const renderFoodIcon = ({ value, checked }: RenderIconProps<string>) => {
  let FoodIcon;

  if (value === 'noodles') FoodIcon = Icon.Noodles;
  else if (value === 'rice') FoodIcon = Icon.Rice;
  else FoodIcon = Icon.Pasta;

  // Переопределение цвета для checked/unchecked состояния
  return <FoodIcon fill={checked ? '#455a64' : '#b0bec5'} width="48" height="48" />;
};

const getColor = (disabled: boolean, readOnly: boolean) => {
  if (disabled) return '#bdbdbd';
  if (readOnly) return '#ffab91';

  return '#f24e23';
};

export const renderSexIcon = <T,>({ checked, disabled, readOnly }: RenderIconProps<T>) => {
  const CheckIcon = checked ? Icon.CheckboxMarked : Icon.CheckboxBlank;

  return <CheckIcon fill={getColor(disabled, readOnly)} />;
};
