import getUsersNames from '../src';

test('getUsersNames', () => {
  const usersSet1 = [
    { name: 'Aziz' },
    { name: 'Avaz' },
    { name: 'Ivan' },
    { name: 'John' },
    { name: 'Aziz' },
  ];
  const usersSet2 = [
    { name: 'Ivan' },
    { name: 'John' },
    { name: 'John' },
    { name: 'Ivan' },
    { name: 'Aziz' },
    { name: 'Ivan' },
    { name: 'Avaz' },
  ];
  expect(getUsersNames(usersSet1)).toEqual({
    Aziz: 2,
    Avaz: 1,
    Ivan: 1,
    John: 1,
  });
  expect(getUsersNames(usersSet2)).toEqual({
    Ivan: 3,
    John: 2,
    Aziz: 1,
    Avaz: 1,
  });
  expect(getUsersNames([])).toEqual({});
});
