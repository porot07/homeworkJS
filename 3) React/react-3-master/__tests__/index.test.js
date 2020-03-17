import React from 'react';
import renderer from 'react-test-renderer';
import { uniqueId } from 'lodash';

import TaskList from '../src/TaskList';

const tasks = [
  {
    id: uniqueId(), title: 'Learn React', body: 'I should learn react', state: 'current',
  },
  {
    id: uniqueId(), title: 'Learn JS', body: 'Yay!', state: 'finished',
  },
  {
    id: uniqueId(), title: 'Learn HTML', body: 'DONE!', state: 'finished',
  },
  {
    id: uniqueId(), title: 'Learn Redux', body: 'Should learn after React', state: 'current',
  },
];

test('TaskList', () => {
  const component = renderer.create(
    <TaskList tasks={tasks} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});