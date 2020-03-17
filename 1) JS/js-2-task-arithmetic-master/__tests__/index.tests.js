import { calcPercent, isEven } from '../src';

it('test calcPercent #1', () => {
  expect(calcPercent(100, 200)).toBe(50);
  expect(calcPercent(50, 150)).toBe(33);
  expect(calcPercent(20, 100)).toBe(20);
  expect(calcPercent(1, 1)).toBe(100);
});

it('test isEvent', () => {
  expect(isEven(10)).toBeTruthy();
  expect(isEven(11)).toBeFalsy();
  expect(isEven(5431)).toBeFalsy();
  expect(isEven(0)).toBeTruthy();
  expect(isEven(-2)).toBeTruthy();
  expect(isEven(-1)).toBeFalsy();
});
