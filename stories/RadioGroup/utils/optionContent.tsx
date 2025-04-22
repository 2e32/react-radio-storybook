import { Color, Language } from '../types';

export const renderSubjectOption = (option: string, index: number) => (
  <span>
    #{index} {option}
  </span>
);

export const renderColorOption = (option: Color) => (
  <span style={{ color: option.color }}>{option.name}</span>
);

export const renderLangOption = (option: Language) => `${option.name} (${option.type})`;
