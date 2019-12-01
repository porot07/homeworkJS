import getUsersNames from '../src';

test('getUsersNames', () => {
  const users = [
    { name: 'Aziz' },
    { name: 'Avaz' },
    { name: 'Ivan' },
    { name: 'John' },
    { name: 'Aziz' },
  ];

  const stopNames = ['Aziz', 'John'];
  const stopNames2 = ['John'];
  const expected = new Map([['Avaz', 1], ['Ivan', 1]]);
  const expected2 = new Map([['Avaz', 1], ['Ivan', 1], ['Aziz', 2]]);
  const actual = getUsersNames(users, stopNames);
  const actual2 = getUsersNames(users, stopNames2);
  expect(actual).toEqual(expected);
  expect(actual2).toEqual(expected2);
});