import React, { useCallback } from 'react';
import cn from 'classnames';

import Radio, { type RenderOptionProps } from '@2e32/react-radio';

import type { TabsProps, TabProps, BgIndicatorProps } from './types';

import './styles.css';

const Tab = ({ option, selected = false, onChange }: TabProps) => (
  <label className={cn('tabs__item', { 'tabs__item--checked': selected })}>
    {option}
    <input
      checked={selected}
      type="radio"
      className="tabs__input"
      onChange={(e) => onChange?.(option, e)}
    />
  </label>
);

const BgIndicator = ({ tabsCount, activeIndex }: BgIndicatorProps) => (
  <span
    className="tabs__indicator"
    style={
      {
        '--tabs-count': tabsCount,
        '--offset': activeIndex,
      } as React.CSSProperties
    }
  />
);

const Tabs = ({ onChange, ...rest }: TabsProps) => {
  const renderOption = useCallback(
    ({ option, optionProps, extraProps }: RenderOptionProps<string>) => {
      const { key, selected } = optionProps;
      const { isLastIndex, selectedIndex, optionsCount } = extraProps;

      return (
        <React.Fragment key={key}>
          <Tab option={option} selected={selected} onChange={onChange} />

          {isLastIndex && <BgIndicator tabsCount={optionsCount} activeIndex={selectedIndex} />}
        </React.Fragment>
      );
    },
    [onChange]
  );

  return <Radio.Group {...rest} className="tabs" block renderOption={renderOption} />;
};

export default Tabs;
