import { useCallback } from 'react';
import cn from 'classnames';

import Radio from '@2e32/react-radio';

import './styles.css';

interface TabsProps extends RadioGroupProps<V, O> {
  // value: T;
  // options: T[];
  // disabled?: boolean;
  // onChange?: (option: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  // [key: string]: any;
}

interface TabProps {
  option: React.ReactNode;
  selected: boolean;
  onChange?: (option: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Tab = ({ option, selected = false, onChange }: TabProps) => {
  return (
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
};

interface BgIndicatorProps {
  tabsCount: number;
  activeIndex: number;
}

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

const Tabs = <V, O>({ options = [], onChange, ...rest }: RadioGroupProps<V, O>) => {
  const renderOption = useCallback(
    ({ option, optionProps, extraProps }: RadioGroupProps<V, O>) => {
      const { key, selected } = optionProps;
      const { isLastIndex, selectedIndex, optionsCount } = extraProps;

      return (
        <>
          <Tab key={key} option={option} selected={selected} onChange={onChange} />

          {isLastIndex && <BgIndicator tabsCount={optionsCount} activeIndex={selectedIndex} />}
        </>
      );
    },
    [onChange]
  );

  return <Radio.Group {...rest} options={options} className="tabs" renderOption={renderOption} />;
};

export default Tabs;
