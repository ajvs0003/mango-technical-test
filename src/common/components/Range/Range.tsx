'use client';

import { getValuesBySteps } from '@/src/utils/utilities';
import { FC } from 'react';
import RangeComponent from './components/RangeComponent';
import { RangeComponentProvider } from './context';
import { RangeProps } from './interface';

export const Range: FC<RangeProps> = ({ staticData, data, width = 600 }) => {
  if (data) {
    const min = data[0];
    const max = data[data.length - 1];

    return (
      <RangeComponentProvider>
        <RangeComponent
          data={data}
          width={width}
          mode={'fixed'}
          staticData={{
            min,
            max,
          }}
        />
      </RangeComponentProvider>
    );
  }

  if (staticData) {
    const values = getValuesBySteps(staticData.min, staticData.max, 1);
    return (
      <>
        <RangeComponentProvider>
          <RangeComponent data={values} width={width} staticData={staticData} />
        </RangeComponentProvider>
      </>
    );
  }

  return null;
};
