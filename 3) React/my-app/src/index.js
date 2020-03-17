import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import MyInput from './MyInput';

const users = [
  { id: 1, name: 'Jon Snow' },
  { id: 2, name: 'Brandon Stark' },
  { id: 3, name: 'Eddard Start' },
  { id: 4, name: 'Tony Stark' },
  { id: 5, name: 'Robb Stark' },
];

const vdom = <MyInput users={users} />;
ReactDOM.render(vdom, document.getElementById('container'));
