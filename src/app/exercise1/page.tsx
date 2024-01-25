import { Range } from '@/src/common/components/index';

async function getValues() {
  const res = await fetch(` https://demo0241237.mockable.io/getMinMax`, {
    cache: 'force-cache',
  });
  return res.json();
}

async function Exercise1() {
  const staticData = await getValues();

  return (
    <main className="flex  flex-col items-center p-24">
      <h1>Exercise 1</h1>
      {staticData && <Range staticData={staticData} />}
    </main>
  );
}

export default Exercise1;
