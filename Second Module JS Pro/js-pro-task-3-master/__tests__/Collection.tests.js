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

  it('toArray', () => {
    const actual = coll.toArray();
    expect(actual).toEqual(users);
  });

  it('filter', () => {
    const expected = [
      { name: 'Cersei', secondName: 'Lannister', age: 40 },
      { name: 'Jon', secondName: 'Snow', age: 18 },
    ];
    const actual = coll.filter((user) => user.age >= 18 && user.age <= 40).toArray();
    expect(actual).toEqual(expected);
    expect(coll.toArray()).not.toEqual(expected);
  });

  it('sortBy', () => {
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

  it('chooseBy', () => {
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

  it('should be immutable #1', () => {
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

  it('should have memo', () => {
    const result = coll.filter((user) => user.age < 18);
    expect(result.memo).toBeUndefined();
    const newColl = result.toArray();

    expect(newColl).toEqual(result.memo);
  });

  it('should be immutable #2', () => {
    const result = coll.filter((user) => user.age < 18);
    const newColl = result.toArray();
    newColl.pop();
    expect(result.memo).not.toEqual(newColl);
    expect(result.memo).toEqual([{ name: 'Daenerys', secondName: 'Targaryen', age: 16 }]);
    const newColl2 = result.toArray();
    newColl2.pop();
    expect(result.memo).not.toEqual(newColl);
  });

  it('length', () => {
    const result = coll.filter((user) => user.age >= 18).sortBy((user) => user.age);
    expect(result).toHaveLength(3);
    expect(result).toHaveLength(3);

    expect(result.toArray()).toEqual(result.memo);
    expect(result.toArray()).toEqual([users[3], users[2], users[0]]);
    const result2 = coll.filter((user) => user.age <= 16).sortBy((user) => user.age);
    expect(result2).toHaveLength(1);
    expect(result2).toHaveLength(1);
  })
});
