import { Range } from '@/src/common/components/index';

async function getValues() {
  const res = await fetch(` https://demo0241237.mockable.io/getPrices`, {
    cache: 'force-cache',
  });

  return res.json();
}

async function Exercise2() {
  const values = await getValues();

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1>Exercise 2</h1>
      {values && <Range data={values.data} />}
    </main>
  );
}

export default Exercise2;
