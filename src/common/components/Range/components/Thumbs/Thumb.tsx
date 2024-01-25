import { DragEvent, FC } from 'react';
import { useRangeComponentHook } from '../../hooks/useRangeComponentHook';

interface ThumbProps {
  threshold: number;
  id: number;
  value: any;
}

const Thumb: FC<ThumbProps> = ({ threshold, id, value }) => {
  const { state, dispatch } = useRangeComponentHook();

  const { minValue, maxValue } = state;

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const thumbId = e.dataTransfer.getData('text');

    if (thumbId === 'min' && value < maxValue)
      dispatch({ type: 'SET_MIN', payload: { min: value } });
    if (thumbId === 'max' && value > minValue)
      dispatch({ type: 'SET_MAX', payload: { max: value } });
  };

  return (
    <div
      id={`drop-${id}`}
      className="rangeBar__item"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        width: `${threshold}px`,
      }}
    />
  );
};

export default Thumb;
