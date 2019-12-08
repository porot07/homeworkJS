import apply from '../src';

test('apply', () => {
  expect(apply(0, Math.sqrt, 4)).toBe(4);
  expect(apply(2, Math.sqrt, 16)).toBe(2);

  expect(apply(1, (v) => v ** 10, 2)).toBe(1024);
  expect(apply(4, (v) => v + 1, 7)).toBe(11);
});
