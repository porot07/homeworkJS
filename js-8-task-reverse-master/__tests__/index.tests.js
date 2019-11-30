import reverse from '../src';

it('reverse', () => {
  expect(reverse('hello')).toBe('olleh');
  expect(reverse('cat')).toBe('tac');
  expect(reverse('t')).toBe('t');
  expect(reverse('')).toBe('');
});