import reduce from '../src';

const targaryen = {
  name: 'Aerys II Targaryen',
  state: 'deceased',
  type: 'parent',
  children: [
    {
      name: 'Rhaegar Targaryen',
      state: 'deceased',
      type: 'parent',
      children: [
        { name: 'Jon Snow', type: 'child', },
        { name: 'Rhaenys Targaryen', state: 'deceased', type: 'child' },
        { name: 'Aegon Targaryen', state: 'deceased', type: 'child' },
      ],
    },
    {
      name: 'Viserys Targaryen',
      state: 'deceased',
      type: 'child',
    },
    {
      name: 'Daenerys Targaryen',
      state: 'deceased',
      type: 'parent',
      children: [
        { name: 'Drogon', type: 'child' },
        { name: 'Rhaegal', state: 'deceased', type: 'child' },
        { name: 'Viserion', state: 'deceased', type: 'child' },
      ],
    },
  ],
};

test('should work', () => {
  const actual = reduce((acc, node) => node.state === 'deceased' ? acc + 1 : acc, targaryen, 0);
  expect(actual).toBe(8);
  const actual2 = reduce((acc, node) => node.type === 'child' ? acc + 1 : acc, targaryen, 0);
  expect(actual2).toBe(7);
  const actual3 = reduce((acc, node) => node.state === 'deceased' ? [...acc, node.name] : acc, targaryen, []);
  expect(actual3).toStrictEqual(['Aerys II Targaryen', 'Rhaegar Targaryen', "Rhaenys Targaryen", "Aegon Targaryen", "Viserys Targaryen", "Daenerys Targaryen", "Rhaegal", "Viserion"]);

});
