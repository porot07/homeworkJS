import Collection from '../src/Collection';

const users = [
  { name: 'Eddard', secondName: 'Stark', age: 45 },
  { name: 'Daenerys', secondName: 'Targaryen', age: 16 },
  { name: 'Cersei', secondName: 'Lannister', age: 40 },
  { name: 'Jon', secondName: 'Snow', age: 18 },
];

test('should be created empty collection', () => {
  const coll = new Collection();
  expect(coll.toArray()).toEqual([]);
});

test('#toArray', () => {
  const coll = new Collection(users);

  const actual = coll.toArray();
  expect(actual).toEqual(users);
});

test('#filter', () => {
  const coll = new Collection(users);
  const expected = [
    { name: 'Cersei', secondName: 'Lannister', age: 40 },
    { name: 'Jon', secondName: 'Snow', age: 18 },
  ];
  const actual = coll.filter((user) => user.age >= 18 && user.age <= 40).toArray();
  expect(actual).toEqual(expected);
  expect(coll.toArray()).not.toEqual(expected);
});

test('#sortBy', () => {
  const coll = new Collection(users);
  const expected = [
    { name: 'Daenerys', secondName: 'Targaryen', age: 16 },
    { name: 'Jon', secondName: 'Snow', age: 18 },
    { name: 'Cersei', secondName: 'Lannister', age: 40 },
    { name: 'Eddard', secondName: 'Stark', age: 45 },
  ];

  const actual = coll.sortBy((user) => user.age).toArray();
  expect(actual).toEqual(expected);
  expect(coll.toArray()).not.toEqual(expected);
});

test('#chooseBy', () => {
  const coll = new Collection(users);
  const expected = ['Eddard', 'Daenerys', 'Cersei', 'Jon'];

  const actual = coll.chooseBy((user) => user.name).toArray();
  expect(actual).toEqual(expected);
  expect(coll.toArray()).not.toEqual(expected);
});

test('fluent interface', () => {
  const coll = new Collection(users);
  const expected = ['Snow', 'Lannister', 'Stark'];

  const actual = coll
    .filter((user) => user.age > 16)
    .sortBy((user) => user.age)
    .chooseBy((user) => user.secondName)
    .toArray();

  expect(actual).toEqual(expected);
  expect(coll.toArray()).not.toEqual(expected);
});

test('shouldn\'t be mutable', () => {
  const expected = [
    { name: 'Eddard', secondName: 'Stark', age: 45 },
    { name: 'Daenerys', secondName: 'Targaryen', age: 16 },
    { name: 'Cersei', secondName: 'Lannister', age: 40 },
    { name: 'Jon', secondName: 'Snow', age: 18 },
  ];
  expect(users).toEqual(expected);
});
