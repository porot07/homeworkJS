import partialApply from '../src';

it('partialApply', () => {
  const fn1 = partialApply((a, b, c) => (a + b + c), 2);
  expect(fn1(1, 2)).toBe(5);
  const fn2 = partialApply((a, b, c) => (a + b * c), 2);
  expect(fn2(1, 2)).toBe(4);
});