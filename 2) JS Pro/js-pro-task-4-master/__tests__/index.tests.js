import toString from '../src';

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
        { name: 'Jon Snow', type: 'child' },
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

const tree = {
  name: 'one',
  type: 'parent',
  children: [
    {
      name: 'two',
      type: 'parent',
      children: [
        { name: 'three', type: 'child' },
        { name: 'four', type: 'child' },
        { name: 'five', type: 'child' },
      ],
    },
    {
      name: 'six',
      type: 'child',
    },
    {
      name: 'seven',
      type: 'parent',
      children: [
        { name: 'eight', type: 'child' },
        { name: 'nine', type: 'child' },
        { name: 'ten', type: 'parent', children: [
          { name: 'eleven', type: 'child' },
          { name: 'twelve', type: 'child' },
          { name: 'thirteen', type: 'child' },
          { name: 'fourteen', type: 'parent', children: [
            { name: 'fifteen', type: 'child' },
            { name: 'sixteen', type: 'child' },
            { name: 'seventeen', type: 'child' },
          ] },
        ] },
      ],
    },
  ],
};

test('should work', () => {
  expect(toString(targaryen)).toBe('Aerys II Targaryen, Rhaegar Targaryen, Jon Snow, Rhaenys Targaryen, Aegon Targaryen, Viserys Targaryen, Daenerys Targaryen, Drogon, Rhaegal, Viserion');
  expect(toString(tree)).toBe('one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen');
});
