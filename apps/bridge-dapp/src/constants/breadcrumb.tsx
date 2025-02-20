import { ContrastTwoLine } from '@webb-tools/icons/ContrastTwoLine';
import UserFillIcon from '@webb-tools/icons/UserFillIcon';
import type { IconBase } from '@webb-tools/icons/types';
import type React from 'react';
import {
  BRIDGE_PATH,
  ECOSYSTEM_PATH,
  NOTE_ACCOUNT_PATH,
  WRAP_UNWRAP_PATH,
} from './paths';

export const BREADCRUMBS_RECORD: Record<
  string,
  {
    label: string;
    Icon?: React.ReactElement<IconBase>;
  }
> = {
  [BRIDGE_PATH]: {
    label: 'Hubble Bridge',
    Icon: <ContrastTwoLine />,
  },
  [WRAP_UNWRAP_PATH]: {
    label: 'Wrap & Unwrap',
  },
  [NOTE_ACCOUNT_PATH]: {
    label: 'Account Dashboard',
    Icon: <UserFillIcon />,
  },
  [ECOSYSTEM_PATH]: {
    label: 'Ecosystem',
  },
} as const;
