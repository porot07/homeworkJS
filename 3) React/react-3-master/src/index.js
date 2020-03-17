import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import TaskList from './TaskList';

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

ReactDOM.render(<TaskList tasks={tasks} />, document.getElementById('container'));
