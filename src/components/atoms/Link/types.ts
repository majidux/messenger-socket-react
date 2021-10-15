import { ViewProps } from '@utils';

export interface LinkTypes extends ViewProps {
  to: string;
  children?: any;
  className?: string;
}
