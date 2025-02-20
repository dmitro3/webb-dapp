import { ReactNode } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

export interface TableAndChartTabsProps extends Tabs.TabsProps {
  /**
   * The list of value for the tabs
   */
  tabs: string[];

  /**
   * Filter component for the charts and tables (optional)
   */
  filterComponent?: ReactNode;

  /**
   * The className for the whole component (optional)
   */
  className?: string;

  /**
   * The className for header, including the trigger list and the filter component (optional)
   */
  headerClassName?: string;

  /**
   * The className for the trigger list (optional)
   */
  listClassName?: string;

  /**
   * The className for trigger items (optional)
   */
  triggerClassName?: string;
}
