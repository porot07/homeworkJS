import Collection from '../src/Collection';

describe('Collection', () => {
  let users;
  let coll;

  beforeEach(() => {
    users = [
      { name: 'Eddard', secondName: 'Stark', age: 45 },
      { name: 'Daenerys', secondName: 'Targaryen', age: 16 },
      { name: 'Cersei', secondName: 'Lannister', age: 40 },
      { name: 'Jon', secondName: 'Snow', age: 18 },
    ];

    coll = new Collection(users);
  });

  it('should be created empty collection', () => {
    const emptyColl = new Collection();
    expect(emptyColl.toArray()).toEqual([]);
  });

  it('#toArray', () => {
    const actual = coll.toArray();
    expect(actual).toEqual(users);
  });

  it('#filter', () => {
    const expected = [
      { name: 'Cersei', secondName: 'Lannister', age: 40 },
      { name: 'Jon', secondName: 'Snow', age: 18 },
    ];
    const actual = coll.filter((user) => user.age >= 18 && user.age <= 40).toArray();
    expect(actual).toEqual(expected);
    expect(coll.toArray()).not.toEqual(expected);
  });

  it('#sortBy', () => {
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

  it('#chooseBy', () => {
    const expected = ['Eddard', 'Daenerys', 'Cersei', 'Jon'];

    const actual = coll.chooseBy((user) => user.name).toArray();
    expect(actual).toEqual(expected);
    expect(coll.toArray()).not.toEqual(expected);
  });

  it('fluent interface', () => {
    const expected = ['Snow', 'Lannister', 'Stark'];

    const actual = coll
      .filter((user) => user.age > 16)
      .sortBy((user) => user.age)
      .chooseBy((user) => user.secondName)
      .toArray();

    expect(actual).toEqual(expected);
    expect(coll.toArray()).not.toEqual(expected);
  });

  it('should be immutable', () => {
    const expected = [
      { name: 'Eddard', secondName: 'Stark', age: 45 },
      { name: 'Daenerys', secondName: 'Targaryen', age: 16 },
      { name: 'Cersei', secondName: 'Lannister', age: 40 },
      { name: 'Jon', secondName: 'Snow', age: 18 },
    ];
    expect(users).toEqual(expected);
  });

  it('should be lazy', () => {
    const result = coll.filter((user) => user.age < 18);
    expect(result.coll.length).toBe(4);
  });
});
