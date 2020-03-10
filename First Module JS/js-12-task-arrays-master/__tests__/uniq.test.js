import uniq from '../src/uniq';

test('uniq', () => {
  expect(uniq([1, 2, 1, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(uniq([1, 'hello', 3, 3, 'hello'])).toEqual([1, 'hello', 3]);
  expect(uniq([1, '', 3, 3, ''])).toEqual([1, '', 3]);
})