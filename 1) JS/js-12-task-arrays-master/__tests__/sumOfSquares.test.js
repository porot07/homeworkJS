import sumOfSquares from '../src/sumOfSquares';

test('sumOfSquares', () => {
  expect(sumOfSquares([1, 2, 3])).toBe(14);
  expect(sumOfSquares([1, 'hello', 3])).toBe(10);
  expect(sumOfSquares(['hello', 'world', '!'])).toBe(0);
});