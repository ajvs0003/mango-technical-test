import { DragEvent, FC } from 'react';

interface ActiveThumbProps {
  thumbId: string;
}

const ActiveThumb: FC<ActiveThumbProps> = ({ thumbId }) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', thumbId);
  };

  return (
    <div
      id={`drag-${thumbId}`}
      className="rangeBar__activeThumb"
      draggable
      onDragStart={handleDragStart}
      style={{
        width: '16px',
        height: '16px',
      }}
    />
  );
};

export default ActiveThumb;
