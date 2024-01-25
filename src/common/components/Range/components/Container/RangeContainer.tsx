'use client';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useRangeComponentHook } from '../../hooks/useRangeComponentHook';
import RangeBar from '../Bar/RangeBar';
import { checkMaxValue, checkMinValue } from './utils';

const RangeContainer: FC = () => {
  //* Contexts
  const { state, dispatch } = useRangeComponentHook();
  const { data, width, minValue, maxValue, mode } = state;

  const lastItem = data[data.length - 1];
  const firstItem = data[0];

  const [localMinValue, setLocalMinValue] = useState(`${minValue}`);
  const [localMaxValue, setLocalMaxValue] = useState(`${maxValue}`);
  const [isMinError, setIsMinError] = useState(false);
  const [isMaxError, setIsMaxError] = useState(false);

  const handleChangeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLocalMinValue(event.target.value);
    if (event.target.value !== '') {
      const newValue = Number.parseInt(event.target.value);

      if (checkMinValue(newValue, maxValue, lastItem)) {
        dispatch({
          type: 'SET_MIN',
          payload: {
            min: newValue,
          },
        });
        setIsMinError(false);
      } else {
        setIsMinError(true);
      }
    }
  };

  const handleChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLocalMaxValue(event.target.value);

    if (event.target.value !== '') {
      const newValue = Number.parseInt(event.target.value);

      if (checkMaxValue(newValue, minValue, lastItem, firstItem)) {
        dispatch({
          type: 'SET_MAX',
          payload: {
            max: newValue,
          },
        });
        setIsMaxError(false);
      } else {
        setIsMaxError(true);
      }
    }
  };

  useEffect(() => {
    setLocalMinValue(`${minValue}`);
    setLocalMaxValue(`${maxValue}`);
  }, [maxValue, minValue]);

  if (minValue === 0 && maxValue === 0) return null;

  return (
    <div
      className="rangeBar"
      style={{
        width: `${width}px`,
      }}
    >
      <input
        id="min"
        disabled={mode === 'fixed'}
        value={localMinValue}
        type="text"
        onBlur={() => setLocalMinValue(`${minValue}`)}
        onChange={handleChangeMinValue}
        className={isMinError ? `rangeBar__input error` : `rangeBar__input`}
      />
      <RangeBar />
      <input
        id="max"
        disabled={mode === 'fixed'}
        value={localMaxValue}
        type="text"
        onBlur={() => setLocalMaxValue(`${maxValue}`)}
        className={isMaxError ? `rangeBar__input error` : `rangeBar__input`}
        onChange={handleChangeMaxValue}
      />
    </div>
  );
};

export default RangeContainer;
