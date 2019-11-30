import getTime from '../src';

it('test getTime', () => {
  expect(getTime(60)).toBe('0:1:0');
  expect(getTime(121)).toBe('0:2:1');
  expect(getTime(3600)).toBe('1:0:0');
  expect(getTime(3719)).toBe('1:1:59');
});