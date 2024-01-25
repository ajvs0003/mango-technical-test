export const checkMinValue = (
  newValue: number,
  maxValue: number,
  lastItem: number
) => newValue < maxValue && newValue <= lastItem;

export const checkMaxValue = (
  newValue: number,
  minValue: number,
  lastItem: number,
  firstItem: number
) => newValue > minValue && newValue >= firstItem && newValue <= lastItem;
