import { If, False, True } from '../src';

it('If, False, True', () => {
  expect(If(True)('fo')('bar')).toBe('fo');
  expect(If(False)('foo')('ba')).toBe('ba');
  expect(True()()).toBeUndefined();
  expect(False()()).toBeUndefined();
});
