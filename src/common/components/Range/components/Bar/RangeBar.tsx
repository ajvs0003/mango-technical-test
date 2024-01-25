import { FC, useMemo } from 'react';
import { useRangeComponentHook } from '../../hooks/useRangeComponentHook';
import ActiveThumb from '../Thumbs/ActiveThumb';
import Thumb from '../Thumbs/Thumb';

const RangeBar: FC = () => {
  //*Constants
  const INPUT_SIZE = 96;

  const { state } = useRangeComponentHook();
  const { data, width, minValue, maxValue } = state;

  const actualWidth = width - INPUT_SIZE;

  //* States
  const items = useMemo(() => {
    if (data.length > 0) {
      const totalInactiveThumbs = data.length - 2;

      return data.map((item, index) => {
        const thresholdByItem = actualWidth / totalInactiveThumbs;

        const isActiveThumb =
          item === minValue ? 'min' : item === maxValue ? 'max' : null;

        return !isActiveThumb ? (
          <Thumb
            threshold={thresholdByItem}
            key={index}
            value={item}
            id={index}
          />
        ) : (
          <ActiveThumb key={index} thumbId={isActiveThumb} />
        );
      });
    }
  }, [data, maxValue, minValue, actualWidth]);

  return (
    <div
      className="range"
      style={{
        width: `${actualWidth}px`,
      }}
    >
      <div
        className="range_child_container"
        style={{
          width: '100%',
        }}
      >
        {items}
      </div>
    </div>
  );
};

export default RangeBar;
