import render from '../src/app';
import fs from 'fs';
import path from 'path';

beforeAll(() => {
  const html = fs.readFileSync(path.join(__dirname, '__fixtures__/index.html'), 'utf-8');
  document.documentElement.innerHTML = html;
  render();
});

test('check initial HTML', () => {
  expect(document.body.innerHTML).toMatchSnapshot();
});

test('add one task', () => {
  document.querySelector('input.form-control').value = 'testing';
  document.querySelector('button.btn').click();
  expect(document.body.innerHTML).toMatchSnapshot();
});

test('tasks queue', () => {
  document.querySelector('input.form-control').value = 'learn js';
  document.querySelector('button.btn').click();
  document.querySelector('input.form-control').value = 'learn react';
  document.querySelector('button.btn').click();
  document.querySelector('input.form-control').value = 'be a pro';
  document.querySelector('button.btn').click();
  expect(document.body.querySelector('ul')).toMatchSnapshot();
})
