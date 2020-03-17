import Tag from '../src/Tag';
import PairedTag from '../src/PairedTag';
import SingularTag from '../src/SingularTag';
import makeTag from '../src/makeTag';

test('Tag', () => {
  const tag = new Tag('tagName', { id: 'container' });

  expect(tag.getName()).toBe('tagName');
});

test('SingularTag', () => {
  const img = new SingularTag('img', { src: 'path/to/pic.png' });

  expect(img.toString()).toBe('<img src="path/to/pic.png" />');
});

test('PairedTag', () => {
  const div = new PairedTag('div', { id: 'container' }, 'Hello, World!');

  expect(div.toString()).toBe('<div id="container">Hello, World!</div>');
});

test('makeTag', () => {
  const div = makeTag('div', { id: 'container' }, 'Hello, World!');
  expect(div.toString()).toBe('<div id="container">Hello, World!</div>');

  const img = makeTag('img', { src: 'path/to/pic.png' });
  expect(img.toString()).toBe('<img src="path/to/pic.png" />');
});

it('nested tags with madeTag', () => {
  const tree = makeTag('div', { id: 'container' }, '', [
    makeTag('div', { class: 'row' }, '', [
      makeTag('div', { class: 'col' }, '', [
        makeTag('img', { src: 'path/to/file.png' }),
        makeTag('br'),
      ]),
      makeTag('div', { class: 'col' }, '', [
        makeTag('h1', { class: 'title' }, 'Hello, World!'),
      ])
    ]),
  ]);

  expect(tree.toString()).toMatchSnapshot();
});