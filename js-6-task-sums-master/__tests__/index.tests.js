import { sumOfAllNums, sequenceSum } from '../src';

it('sumOfAllNums', () => {
  expect(sumOfAllNums(10)).toBe(55);
  expect(sumOfAllNums(5)).toBe(15);
  expect(sumOfAllNums(-1)).toBe(0);
});

it('sequenceSum', () => {
  expect(sequenceSum(2, 6)).toBe(20);
  expect(sequenceSum(3, 10)).toBe(52);
  expect(sequenceSum(9, 1)).toBeNaN();
  expect(sequenceSum(10, 10)).toBe(10);
});

