import parse from '../src';

test('should work', () => {
  const dsl = [
    'grandpa', [
      ['dad', [
        ['me'],
        ['brother']
      ]],
      ['aunt', [
        ['cousin'],
        ['cousin'],
      ]],
    ]
  ];
  const actual = parse(dsl);
  const expected = {
    name: 'grandpa',
    type: 'internal',
    children: [
      {
        name: 'dad',
        type: 'internal',
        children: [
          { name: 'me', type: 'leaf' },
          { name: 'brother', type: 'leaf' },
        ],
      },
      {
        name: 'aunt',
        type: 'internal',
        children: [
          { name: 'cousin', type: 'leaf' },
          { name: 'cousin', type: 'leaf' },
        ],
      },
    ],
  };

  expect(actual).toEqual(expected);
});

test('should work', () => {
  const dsl = [
    '/', [
      ['etc', [
        ['file'],
        ['file.txt'],
      ]],
      ['usr'],
      ['tmp'],
    ],
  ];
  const actual = parse(dsl);
  const expected = {
    name: '/',
    type: 'internal',
    children: [
      {
        name: 'etc',
        type: 'internal',
        children: [
          { name: 'file', type: 'leaf' },
          { name: 'file.txt', type: 'leaf' },
        ],
      },
      {
        name: 'usr',
        type: 'leaf',
      },
      {
        name: 'tmp',
        type: 'leaf',
      },
    ],
  }

  expect(actual).toEqual(expected);
});