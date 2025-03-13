import type { RenderIconProps } from '@2e32/react-radio';

import * as Icon from '../assets/icons/svg';

const getCheckboxColor = (disabled: boolean, readOnly: boolean) => {
  if (disabled) return '#bdbdbd';
  if (readOnly) return '#ffab91';

  return '#f24e23';
};

export const renderCheckboxIcon = ({ checked, disabled, readOnly }: RenderIconProps<string>) => {
  const CheckIcon = checked ? Icon.CheckboxMarked : Icon.CheckboxBlank;

  return <CheckIcon fill={getCheckboxColor(disabled, readOnly)} />;
};

export const renderPathogenIcon = ({ value, checked }: RenderIconProps<string>) => {
  if (!value) return null;

  const isBacteriaItem = value === 'Bacteria';

  const PathogenIcon = isBacteriaItem ? Icon.BacteriaOutline : Icon.VirusOutline;
  const color = isBacteriaItem ? '#4d873a' : '#465c8e';

  return <PathogenIcon fill={checked ? color : '#c2c2c2'} width={36} height={36} />;
};
