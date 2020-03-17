import countRavens from '../src';

it('countRavens should work', () => {
  expect(countRavens(1)).toBe('На ветке сидит 1 ворона');
  expect(countRavens(2)).toBe('На ветке сидит 2 вороны');
  expect(countRavens(5)).toBe('На ветке сидит 5 ворон');
  expect(countRavens(11)).toBe('На ветке сидит 11 ворон');
  expect(countRavens(111)).toBe('На ветке сидит 111 ворон');
  expect(countRavens(121)).toBe('На ветке сидит 121 ворона');
  expect(countRavens(135)).toBe('На ветке сидит 135 ворон');
  expect(countRavens(162)).toBe('На ветке сидит 162 вороны');
  expect(countRavens()).toBeNull();
  expect(countRavens(0)).toBe('На ветке сидит 0 ворон');
});