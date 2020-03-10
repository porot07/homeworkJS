import render from '../src/app';

test('dom', () => {
  document.body.innerHTML = '<div id="container"></div>';
  render();
  expect(document.body.innerHTML).toMatchSnapshot();
});
