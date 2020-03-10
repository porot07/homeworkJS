import parse from '../src/parse';
import makeTag from '../src/makeTag';


test('parse', () => {
  const dsl = ['div', { class: 'container' }, [
    ['div', { class: 'row' }, [
      ['div', { class: 'col' }, [
        ['img', { src: 'path/to/file.png', alt: 'picture' } ],
        ['br'],
      ]],
      ['div', { class: 'col' }, [
        ['h1', { class: 'title' }, 'Hello, World!' ],
      ]],
    ]],
  ]];

  const result = parse(dsl);
  const ast = makeTag('div', { class: 'container' }, '', [
    makeTag('div', { class: 'row' }, '', [
      makeTag('div', { class: 'col' }, '', [
        makeTag('img', { src: 'path/to/file.png', alt: 'picture' }),
        makeTag('br'),
      ]),
      makeTag('div', { class: 'col' }, '', [
        makeTag('h1', { class: 'title' }, 'Hello, World!'),
      ]),
    ]),
  ]);

  expect(ast).toEqual(result);
});

test('toString', () => {
  const dsl = ['div', { class: 'container' }, [
    ['div', { class: 'row' }, [
      ['div', { class: 'col' }, [
        ['img', { src: 'path/to/file.png', alt: 'picture' } ],
        ['br'],
      ]],
      ['div', { class: 'col' }, [
        ['h1', { class: 'title' }, 'Hello, World!' ],
      ]],
    ]],
  ]];

  const ast = parse(dsl);
  const result = '<div class="container"><div class="row"><div class="col"><img src="path/to/file.png" alt="picture" /><br /></div><div class="col"><h1 class="title">Hello, World!</h1></div></div></div>';
  expect(ast.toString()).toEqual(result);
});