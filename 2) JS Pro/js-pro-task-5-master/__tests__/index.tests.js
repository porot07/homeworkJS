import map from '../src';

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
  const actual = map((node) => ({
    ...node,
    name: node.name.toUpperCase(),
  }), targaryen);

  const expected = {
    name: 'AERYS II TARGARYEN',
    state: 'deceased',
    type: 'parent',
    children: [
      {
        name: 'RHAEGAR TARGARYEN',
        state: 'deceased',
        type: 'parent',
        children: [
          { name: 'JON SNOW', type: 'child', },
          { name: 'RHAENYS TARGARYEN', state: 'deceased', type: 'child' },
          { name: 'AEGON TARGARYEN', state: 'deceased', type: 'child' },
        ],
      },
      {
        name: 'VISERYS TARGARYEN',
        state: 'deceased',
        type: 'child',
      },
      {
        name: 'DAENERYS TARGARYEN',
        state: 'deceased',
        type: 'parent',
        children: [
          { name: 'DROGON', type: 'child' },
          { name: 'RHAEGAL', state: 'deceased', type: 'child' },
          { name: 'VISERION', state: 'deceased', type: 'child' },
        ],
      },
    ],
  };
  const expected2 = {
    name: 'AERYS II TARGARYEN',
    state: 0,
    type: 'parent',
    children: [
      {
        name: 'RHAEGAR TARGARYEN',
        state: 0,
        type: 'parent',
        children: [
          { name: 'JON SNOW', type: 'child', state: 1 },
          { name: 'RHAENYS TARGARYEN', state: 0, type: 'child' },
          { name: 'AEGON TARGARYEN', state: 0, type: 'child' },
        ],
      },
      {
        name: 'VISERYS TARGARYEN',
        state: 0,
        type: 'child',
      },
      {
        name: 'DAENERYS TARGARYEN',
        state: 0,
        type: 'parent',
        children: [
          { name: 'DROGON', state: 1, type: 'child' },
          { name: 'RHAEGAL', state: 0, type: 'child' },
          { name: 'VISERION', state: 0, type: 'child' },
        ],
      },
    ],
  };

  expect(actual).toEqual(expected);

  const actual2 = map((node) => ({
    ...node,
    state: node.state === 'deceased' ? 0 : 1,
  }), actual);

  expect(actual2).toEqual(expected2);
});

