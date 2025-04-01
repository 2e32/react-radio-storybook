import type { AlignmentOption } from './types';

export const optionKey = (option: AlignmentOption) => option.value;

export const compareValueAndOption = (
  currValue: string | null | undefined,
  option: AlignmentOption
) => currValue === option.value;
