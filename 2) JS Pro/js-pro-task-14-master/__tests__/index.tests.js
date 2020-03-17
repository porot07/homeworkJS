import awk from '../src';

test('solution 1', () => {
  const data = [
    '  knowledge test\n',
    'hi  all\n',
    'endpoint   courses   \n\n',
  ];

  const expected = [
    'knowledge',
    'hi',
    'endpoint',
  ];

  expect(awk(data.join(''))).toEqual(expected);
});

test('solution 2', () => {
  const data = [
    '\n\n  knowledge hello   \n',
    'the\n',
    ' best endpoint of courses\n',
  ];

  const expected = [
    'knowledge',
    'the',
    'best',
  ];

  expect(awk(data.join(''))).toEqual(expected);
});

test('solution 3', () => {
  const data = [
    '\n\n  hello   \n',
    'from the bottom of my heart?\n',
    ' knowledge the best courses',
  ];

  const expected = [
    'hello',
    'from',
    'knowledge',
  ];

  expect(awk(data.join(''))).toEqual(expected);
});

test('solution 4', () => {
  const data = [
    '\n\n  well   \n',
    'so how are you doing?\n',
    ' best who are you',
  ];

  const expected = [
    'well',
    'so',
    'best',
  ];

  expect(awk(data.join(''))).toEqual(expected);
});
