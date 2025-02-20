'use client';

import SkeletonLoader from '@webb-tools/webb-ui-components/components/SkeletonLoader';

import getRoundedDownNumberWith2Decimals from '../../utils/getRoundedDownNumberWith2Decimals';
import dataHooks from './dataHooks';
import type { HeaderChipItemProps } from './types';

type Props = Pick<HeaderChipItemProps, 'label'>;

const ChipText = ({ label }: Props) => {
  const { isLoading, error, data } = dataHooks[label]();

  return (
    <>
      {label}:{' '}
      {isLoading ? (
        <SkeletonLoader className="w-[100px]" />
      ) : error ? (
        'Error'
      ) : data === null ? null : (
        getRoundedDownNumberWith2Decimals(data)
      )}
    </>
  );
};

export default ChipText;
