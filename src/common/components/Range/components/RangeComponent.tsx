'use client';

import { FC, useEffect } from 'react';
import { useRangeComponentHook } from '../hooks/useRangeComponentHook';
import { RangeComponentProps } from '../interface';
import RangeContainer from './Container/RangeContainer';

const RangeComponent: FC<RangeComponentProps> = ({
  data,
  staticData: { min, max },
  mode,
  width,
}) => {
  //* Contexts
  const { dispatch } = useRangeComponentHook();

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch({
        type: 'SET_DATA',
        payload: {
          data,
          mode: mode,
          width: width,
          minValue: min,
          maxValue: max,
        },
      });
    }
  }, [data, dispatch, max, min, width, mode]);

  return <RangeContainer />;
};

export default RangeComponent;
