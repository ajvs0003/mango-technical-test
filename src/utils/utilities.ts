export const getValuesBySteps = (min: number, max: number, step: number) => {
  let array = [min];

  for (let i = min + step; i < max; i += step) {
    array.push(i);
  }

  array.push(max);

  return array;
};
