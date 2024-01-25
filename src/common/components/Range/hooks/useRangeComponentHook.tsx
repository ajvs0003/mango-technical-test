import { useContext } from 'react';
import { RangeComponentContext } from '../context';

export const useRangeComponentHook = () => {
  const context = useContext(RangeComponentContext);
  if (!context) {
    throw new Error(
      'useRangeComponentHook must be used within a RangeComponentProvider'
    );
  }
  return context;
};
