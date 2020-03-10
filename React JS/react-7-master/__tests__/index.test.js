import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import App from '../src/App';
import TaskList from '../src/TaskList';
import Form from '../src/Form';
import rootReducer from '../src/reducers';
import * as actions from '../src/actions';


configure({ adapter: new Adapter() });

test('App', () => {
  const store = createStore(rootReducer);

  const component = mount(
    <Provider store={store}>
      <App />,
    </Provider>
  );
  // store.dispatch(actions.addPost({ data: 'Hello!' }));

  expect(component.find('TaskList')).toHaveLength(1);
  expect(component.html()).toMatchSnapshot();
  expect(component.find('TaskList').prop('posts')).toEqual({});
  component.find('Form').find('input').simulate('change', { target: { value: 'Hello, World!' } });
  component.find('Form').find('form').simulate('submit');
  expect(component.find('TaskList').prop('posts')).toEqual({ 1: { id: "1", text: 'Hello, World!' } });
  expect(component.find('TaskList').prop('posts')).toEqual(store.getState().posts);
  component.find('Form').find('input').simulate('change', { target: { value: 'Test' } });
  component.find('Form').find('form').simulate('submit');
  expect(component.find('TaskList').prop('posts')).toEqual({
    1: { id: "1", text: 'Hello, World!' },
    2: { id: "2", text: 'Test' },
  });
  expect(component.find('TaskList').prop('posts')).toEqual(store.getState().posts);
  expect(component.html()).toMatchSnapshot();

});