import { type RadioGroupProps } from '@2e32/react-radio';

type TabsProps = Pick<RadioGroupProps<string, string>, 'value' | 'options' | 'onChange'>;

interface TabProps {
  option: string;
  selected: boolean;
  onChange?: (option: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface BgIndicatorProps {
  tabsCount: number;
  activeIndex: number;
}

export type { TabsProps, TabProps, BgIndicatorProps };
