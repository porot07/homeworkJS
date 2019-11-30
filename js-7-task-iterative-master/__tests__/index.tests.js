import { sumOfOdds, getSmallestDivisor } from '../src';

it('sumOfOdds', () => {
  expect(sumOfOdds(10)).toBe(25);
  expect(sumOfOdds(5)).toBe(9);
});

it('getSmallestDivisor', () => {
  expect(getSmallestDivisor(15)).toBe(3);
  expect(getSmallestDivisor(16)).toBe(2);

  expect(getSmallestDivisor(7)).toBe(7);
  expect(getSmallestDivisor(1)).toBe(1);
});