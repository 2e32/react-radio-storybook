import { type RadioGroupProps } from '@2e32/react-radio';

import './styles.css';

type AlignmentProps = Pick<RadioGroupProps<string, AlignmentOption>, 'value' | 'onChange'>;

interface AlignmentOption {
  value: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
}

export type { AlignmentProps, AlignmentOption };
