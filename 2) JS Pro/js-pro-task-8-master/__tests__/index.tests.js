import PairedTag from '../src/PairedTag';
import SingularTag from '../src/SingularTag';

test('flat structure', () => {
  const div = new PairedTag('div', { class: 'container' }, 'Hello, World!');
  expect(div.toString()).toBe('<div class="container">Hello, World!</div>');

  const img = new SingularTag('img', { src: 'image.jpg', alt: 'Picture' });
  expect(img.toString()).toBe('<img src="image.jpg" alt="Picture" />');
});

test('nested tags', () => {
  const tree = new PairedTag(
    'div',
    { class: 'container' },
    '',
    [
      new PairedTag('div', { class: 'row' }, 'hello, world!'),
      new PairedTag('h1', { class: 'title' }, [
        new PairedTag('span', { class: 'important' }, 'In the title'),
      ]),
    ],
  );

  expect(tree.toString()).toMatchSnapshot();
});